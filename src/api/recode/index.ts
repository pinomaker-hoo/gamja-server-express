import passport from "passport"

const router = require("express").Router()
const recode = require("./recode.service")
const { uploadImg } = require("../../utils/multer")

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
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  recode.saveRecode
)

module.exports = router
export {}
