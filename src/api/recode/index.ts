import passport from "passport"

const router = require("express").Router()
const recode = require("./recode.service")

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  recode.getRecode
)
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  recode.saveRecode
)

module.exports = router
export {}
