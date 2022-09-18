import { Recode } from "../../models/domain/Recode"

console.log("======Create Recode Table======")

const create_table_recode = async () => {
  await Recode.sync({ force: true })
    .then(() => {
      console.log("✅Success Create Recode Table")
    })
    .catch((err) => {
      console.log("❗️Error in Create Recode Table : ", err)
    })
}

create_table_recode()
