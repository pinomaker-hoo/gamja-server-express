import passport from "passport"

const router = require("express").Router()
const recode = require("./recode.service")
const { uploadImg } = require("../../utils/multer")

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

router.post(
  "/img",
  uploadImg.single("image"),
  passport.authenticate("jwt", { session: false }),
  recode.saveRecodeWithImg
)

module.exports = router
export {}
