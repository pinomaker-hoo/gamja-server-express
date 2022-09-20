import passport from "passport"

const router = require("express").Router()
const userInfo = require("./userInfo.service")

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  userInfo.getInfo
)
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  userInfo.infoSave
)

module.exports = router
export {}
