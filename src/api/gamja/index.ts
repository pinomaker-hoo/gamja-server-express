const router = require("express").Router()
const gamja = require("./gamja.service")

router.get("/", gamja.test)

module.exports = router
export {}