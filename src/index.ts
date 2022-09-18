import bodyParser from "body-parser"
import express from "express"
import cors from "cors"
import sequelize from "./models"

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use("/api", require("./api"))
app.get("/", (req, res) => res.send("SEVER ON"))

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
