import bodyParser from "body-parser"
import express, { Request, Response } from "express"
import cors from "cors"
import sequelize from "./models"

const app = express()

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
app.listen(port, async () => {
  console.log(`SERVER ON PORT : ${port}`)
  await sequelize
    .authenticate()
    .then(async () => {
      console.log("connection success")
    })
    .catch((e) => {
      console.log(e)
    })
})
