import { Request, Response } from "express"
import passport from "passport"

const router = require("express").Router()
const user = require("./user.service")

router.post("/", user.localSave)
router.post("/local", user.localLogin)
router.get("/kakao", passport.authenticate("kakao"))
router.get("/kakao/callback", user.kakaoLogin)

module.exports = router
export {}
