const router = require("express").Router()
const recode = require("./recode.service")

router.get("/:idx", recode.getRecode)
router.post("/", recode.saveRecode)

module.exports = router
export {}
