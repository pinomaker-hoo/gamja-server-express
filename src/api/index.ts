const router = require("express").Router()

router.use("/user", require("./user"))
router.use("/gamja", require("./gamja"))
router.use("/board", require("./board"))
router.use("/recode", require("./recode"))

module.exports = router
export {}
