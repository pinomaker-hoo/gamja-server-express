const router = require("express").Router()
const board = require("./board.service")

router.get("/", board.getBoardList)
router.get("/user/:idx", board.getMyBoardList) //JWT 이용 예정
router.get("/:idx", board.getBoard)
router.post("/", board.saveBoard)

module.exports = router
export {}
