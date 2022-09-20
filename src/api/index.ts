const router = require("express").Router()

router.use("/user", require("./user"))
router.use("/gamja", require("./gamja"))
router.use("/board", require("./board"))

module.exports = router
export {}
