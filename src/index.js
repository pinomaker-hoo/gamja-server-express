const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const { sequelize } = require("./models")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공")
  })
  .catch((err) => {
    console.error(err)
  })

const port = 3000
app.listen(port, () => console.log(`SERVER ON PORT : ${port}`))
