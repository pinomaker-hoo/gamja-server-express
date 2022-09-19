import passportLocal from "passport-local"
import passportJwt, { ExtractJwt } from "passport-jwt"
import passportKakao from "passport-kakao"
import passport from "passport"
import { User } from "../../models/domain/User"
import * as bcrypt from "bcryptjs"
import { Request } from "express"
import { Provider } from "../../models/interface/Provider"

const LocalStrategy = passportLocal.Strategy
const JwtStrategy = passportJwt.Strategy
const KakaoStrategy = require("passport-kakao").Strategy

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email: any, password: any, done: any) => {
        try {
          const findUser = await User.findOne({ where: { email: email } })
          if (!findUser)
            done(null, false, { message: "가입되지 않은 회원 입니다." })
          else {
            const result = await bcrypt.compare(password, findUser.password)
            result
              ? done(null, findUser)
              : done(null, false, { message: "비밀번호가 일치 하지 않음" })
          }
        } catch (err) {
          console.error(err)
          done(err)
        }
      }
    )
  )
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([
          (request: Request) => {
            console.log(request.cookies.accessToken)
            return request.cookies.accessToken
          },
        ]),
        secretOrKey: "123",
      },
      async (jwtPayload, done) => {
        try {
          const findUser = await User.findOne({
            where: { idx: jwtPayload.idx },
          })
          return done(null, findUser)
        } catch (err) {
          console.error(err)
          done(err)
        }
      }
    )
  )
  passport.use(
    new KakaoStrategy(
      {
        clientID: "4ec15bfbe24f7905a7b3d99a8a988aae",
        callbackURL: "http://localhost:3030/api/user/kakao/callback",
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: any
      ) => {
        try {
          const findUser = await User.findOne({
            where: { providerId: profile.id },
          })
          if (findUser) {
            done(null, findUser)
          } else {
            const profileJson = profile._json
            const kakao_account = profileJson.kakao_account
            const saveUser = await User.create({
              email:
                kakao_account.has_email && !kakao_account.email_needs_agreement
                  ? kakao_account.email
                  : null,
              name: kakao_account.profile.nickname,
              providerId: profile.id,
              provider: Provider.KAKAO,
            })
            done(null, saveUser)
          }
        } catch (err) {
          console.error(err)
          done
        }
      }
    )
  )
}
