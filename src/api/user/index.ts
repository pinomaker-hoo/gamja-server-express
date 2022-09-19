const router = require("express").Router()
const user = require("./user.controller")

router.post("/", user.localSave)
router.post("/local", user.localLogin)

module.exports = router
export {}
