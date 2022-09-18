const router = require("express").Router()
const user = require("./user.service")

router.get("/", user.test)

module.exports = router
export {}
