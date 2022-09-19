const router = require("express").Router()
const user = require("./user.controller")

router.post("/", user.localSave)
router.get("/", user.test)

module.exports = router
export {}
