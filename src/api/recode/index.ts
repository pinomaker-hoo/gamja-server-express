const router = require("express").Router()
const recode = require("./recode.service")

router.get("/", recode.test)

module.exports = router
export {}
