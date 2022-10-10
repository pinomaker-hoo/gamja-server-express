import express from "express"
import cors from "cors"
import sequelize from "./models"
import passport from "passport"
import cookieParser from "cookie-parser"
import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"
import path from "path"

const PassportCofig = require("./utils/passport/index")
const swaggerSpec = YAML.load(
  path.join(__dirname, "./utils/swagger/openapi.yaml")
)
const app = express()

PassportCofig()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(
  cors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
)

app.use(passport.initialize())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use("/api", require("./api"))
app.get("/", (req, res) => res.send("SEVER ON"))

const port = 3030
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
