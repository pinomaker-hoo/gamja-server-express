import { Request, Response } from "express"
import passport from "passport"

const router = require("express").Router()
const user = require("./user.service")

/**
 * @swagger
 *  /product:
 *    get:
 *      tags:
 *      - product
 *      description: 모든 제품 조회
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: category
 *          required: false
 *          schema:
 *            type: integer
 *            description: 카테고리
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */
//blog.kyeongsun.com/69 [ENFJ.dev:티스토리]
출처: https: router.post("/", user.localSave)
router.post("/local", user.localLogin)
router.get("/kakao", passport.authenticate("kakao"))
router.get("/kakao/callback", user.kakaoLogin)
// router.get(
//   "/test",
//   passport.authenticate("jwt", { session: false }),
//   (req: Request, res: Response) => {
//     res.send("Success")
//   }
// )

module.exports = router
export {}
