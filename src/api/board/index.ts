const router = require("express").Router()
const board = require("./board.service")

router.get("/", board.test)

module.exports = router
export {}
