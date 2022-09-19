import passport from "passport"
import passportLocal from "passport-local"
import { User } from "../../models/domain/User"
import * as bcrypt from "bcryptjs"

const LocalStrategy = require("passport-local").Strategy

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
}
