const router = require("express").Router()
const gamja = require("./gamja.service")

router.get("/", gamja.getGamjaRankList)
router.get("/:idx", gamja.getGamja)
router.post("/", gamja.saveGamja)
router.patch("/exp/:idx", gamja.updateGamjaExp)
router.patch("/:idx", gamja.updateName)

module.exports = router
export {}
