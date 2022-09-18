import { UserInfo } from "../../models/domain/UserInfo"

console.log("======Create UserInfo Table======")

const create_table_userInfo = async () => {
  await UserInfo.sync({ force: true })
    .then(() => {
      console.log("✅Success Create UserInfo Table")
    })
    .catch((err) => {
      console.log("❗️Error in Create UserInfo Table : ", err)
    })
}

create_table_userInfo()
