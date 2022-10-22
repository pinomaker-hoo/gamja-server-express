import passport from "passport"

const router = require("express").Router()
const user = require("./user.service")

router.post("/", user.localSave)
router.post("/local", user.localLogin)
router.patch(
  "/password",
  passport.authenticate("jwt", { session: false }),
  user.passwordUpdate
)
router.patch(
  "/name",
  passport.authenticate("jwt", { session: false }),
  user.nameUpdate
)

module.exports = router
export {}
