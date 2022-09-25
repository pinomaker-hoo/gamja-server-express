import passport from "passport"

const router = require("express").Router()
const user = require("./user.service")

router.post("/", user.localSave)
router.post("/local", user.localLogin)
router.get("/kakao", passport.authenticate("kakao"))
router.get("/kakao/callback", user.kakaoLogin)
router.get("/kakao/app/callback", user.appKakaoLogin)


module.exports = router
export {}
