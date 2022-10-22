import passport from "passport"

const router = require("express").Router()
const board = require("./board.service")

router.get("/", board.getBoardList)
router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  board.getMyBoardList
)
router.get("/:idx", board.getBoard)
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  board.saveBoard
)
router.patch("/:idx", board.updateBoard)
router.delete("/:idx", board.deleteBoard)
module.exports = router
export {}
