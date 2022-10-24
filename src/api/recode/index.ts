import passport from "passport"

const router = require("express").Router()
const recode = require("./recode.service")

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  recode.getRecode
)
router.get(
  "/day",
  passport.authenticate("jwt", { session: false }),
  recode.getRecodeByDay
)
router.post("/:idx", recode.saveRecode)

module.exports = router
export {}
