import { Gamjas } from "../../models/Gamja"

console.log("======Create User Table======")

const create_table_users = async () => {
  await Gamjas.sync({ force: true })
    .then(() => {
      console.log("✅Success Create User Table")
    })
    .catch((err) => {
      console.log("❗️Error in Create User Table : ", err)
    })
}

create_table_users()
