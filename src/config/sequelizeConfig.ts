import dotenv from "dotenv"
dotenv.config()

const config = {
  development: {
    username: "pino",
    password: "qwer1595",
    database: "gamza",
    host: "210.90.136.10",
    dialect: "mysql",
  },
}

export default config