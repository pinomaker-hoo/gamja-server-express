import { Request, Response } from "express"
import passport from "passport"

const router = require("express").Router()
const user = require("./user.controller")

router.post("/", user.localSave)
router.post("/local", user.localLogin)
router.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  (req: Request, res: Response) => {
    res.send("Success")
  }
)

module.exports = router
export {}
