const router = require("express").Router()
const user = require("./user.service")

router.post("/", user.localSave)
router.post("/local", user.localLogin)
router.patch("/", user.userUpdate)

module.exports = router
export {}
