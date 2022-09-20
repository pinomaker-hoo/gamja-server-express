const router = require("express").Router()

router.use("/user", require("./user"))
router.use("/gamja", require("./gamja"))

module.exports = router
export {}
