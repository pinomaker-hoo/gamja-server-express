import passportLocal from "passport-local"
import passportJwt, { ExtractJwt } from "passport-jwt"
import passport from "passport"
import { User } from "../../models/domain/User"
import * as bcrypt from "bcryptjs"
import { Request } from "express"
import { Provider } from "../../models/interface/Provider"

const LocalStrategy = passportLocal.Strategy
const JwtStrategy = passportJwt.Strategy

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email: string, password: string, done: any) => {
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
          const findUser: any = await User.findOne({
            where: { idx: jwtPayload.idx },
          })
          return done(null, findUser.dataValues)
        } catch (err) {
          console.error(err)
          done(err)
        }
      }
    )
  )
}
