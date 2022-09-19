// const passport = require("passport"),
//   models = require("../../models")

import passport from "passport"
import { User } from "../../models/domain/User"

module.exports = () => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      function (jwtPayload, done) {
        return UserModel.findOneById(jwtPayload.id)
          .then((user) => {
            return done(null, user)
          })
          .catch((err) => {
            return done(err)
          })
      }
    )
  )
}
