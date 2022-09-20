import { Association, DataTypes, Model } from "sequelize"
import sequelize from "../index"
import { UserInfoAttributes } from "../interface/UserInfo"
import { User } from "./User"

export class UserInfo extends Model<UserInfoAttributes> {
  public readonly idx!: number
  public birth!: Date
  public gender!: boolean
  public height!: number
  public weight!: number
  public userIdx!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {
    recodeUser: Association<UserInfo, User>
  }
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
    userIdx: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "UserInfo",
    tableName: "tbl_user_info",
    sequelize,
    freezeTableName: true,
  }
)

User.hasMany(UserInfo, {
  sourceKey: "idx",
  foreignKey: "userIdx",
  as: "infoUser",
})

UserInfo.belongsTo(User, {
  foreignKey: "userIdx",
  as: "infoUser",
})
