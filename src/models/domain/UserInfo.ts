import { DataTypes, Model } from "sequelize"
import sequelize from "../index"
import { UserInfoAttributes } from "../interface/UserInfo"

export class UserInfo extends Model<UserInfoAttributes> {
  public readonly idx!: number
  public birth!: Date
  public gender!: boolean
  public height!: number
  public weight!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

UserInfo.init(
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    birth: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.CHAR,
    },
    height: {
      type: DataTypes.DOUBLE,
    },
    weight: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    modelName: "UserInfo",
    tableName: "tbl_user_info",
    sequelize,
    freezeTableName: true,
  }
)
