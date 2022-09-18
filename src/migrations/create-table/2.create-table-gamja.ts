import { Gamja } from "../../models/domain/Gamja"

console.log("======Create Gamja Table======")

const create_table_gamja = async () => {
  await Gamja.sync({ force: true })
    .then(() => {
      console.log("✅Success Create Gamja Table")
    })
    .catch((err) => {
      console.log("❗️Error in Create Gamja Table : ", err)
    })
}

create_table_gamja()
