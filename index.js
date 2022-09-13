const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const port = 3000
app.listen(port, () => console.log(`SERVER ON PORT : ${port}`))
