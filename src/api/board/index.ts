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

// passport.authenticate("jwt", { session: false }),
//   (req: Request, res: Response) => {
//     res.send("Success")
//   }

module.exports = router
export {}
