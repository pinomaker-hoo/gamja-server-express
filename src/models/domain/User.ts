import { Association, DataTypes, Model } from "sequelize"
import sequelize from "../index"
import { UserAttributes } from "../interface/User"
import { Provider } from "../interface/Provider"
import { Gamja } from "./Gamja"
import { UserInfo } from "./UserInfo"
import { Recode } from "./Recode"
import { Board } from "./Board"

export class User extends Model<UserAttributes> {
  public readonly idx!: number
  public email!: string
  public password!: string
  public name!: string
  public provider!: Provider
  public providerId!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {
    gamja: Association<User, Gamja>
    userInfo: Association<User, UserInfo>
    recode: Association<User, Recode>
    board: Association<User, Board>
  }
}

User.init(
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(120),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    provider: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    providerId: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    modelName: "User",
    tableName: "tbl_user",
    sequelize,
    freezeTableName: true,
  }
)
User.hasOne(Gamja, {
  sourceKey: "idx",
  foreignKey: "user_idx",
  as: "gamja",
})

User.hasOne(UserInfo, {
  sourceKey: "idx",
  foreignKey: "user_idx",
  as: "userInfo",
})

User.hasMany(Recode, {
  sourceKey: "idx",
  foreignKey: "user_idx",
  as: "recode",
})

User.hasMany(Board, {
  sourceKey: "idx",
  foreignKey: "user_idx",
  as: "board",
})
