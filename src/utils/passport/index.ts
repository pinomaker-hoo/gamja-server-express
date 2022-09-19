import passportLocal from "passport-local"
import passportJwt from "passport-jwt"
import passport from "passport"
const local = require("./localStrategy")

import { User } from "../../models/domain/User"
import * as bcrypt from "bcryptjs"

const LocalStrategy = passportLocal.Strategy
const JWTStrategy = passportJwt.Strategy
const ExtractJWT = passportJwt.ExtractJwt

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
  //   passport.use()

  //JWT Strategy
  //   passport.use(
  //     new JWTStrategy(
  //       {
  //         jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  //         secretOrKey: process.env.JWT_SECRET,
  //       },
  //       function (jwtPayload, done) {
  //         return UserModel.findOneById(jwtPayload.id)
  //           .then((user) => {
  //             return done(null, user)
  //           })
  //           .catch((err) => {
  //             return done(err)
  //           })
  //       }
  //     )
  //   )
}
