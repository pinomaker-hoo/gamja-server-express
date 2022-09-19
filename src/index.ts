import bodyParser from "body-parser"
import express from "express"
import cors from "cors"
import sequelize from "./models"
import passport from "passport"
import cookieParser from "cookie-parser"

const PassportCofig = require("./utils/passport/index")
const app = express()

PassportCofig()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use(passport.initialize())

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
