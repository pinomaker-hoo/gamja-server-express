import passport from "passport"

const router = require("express").Router()
const gamja = require("./gamja.service")

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  gamja.getGamja
)
router.get("/rank", gamja.getGamjaRankList)
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  gamja.saveGamja
)
router.patch(
  "/exp",
  passport.authenticate("jwt", { session: false }),
  gamja.updateGamjaExp
)
router.patch(
  "/",
  passport.authenticate("jwt", { session: false }),
  gamja.updateName
)

module.exports = router
export {}
