import { DataTypes, Model } from "sequelize"
import sequelize from "./index"
import { UsersAttributes } from "./interface/User"
import { Provider } from "./interface/Provider"
import { Gamjas } from "./Gamja"

export class Users extends Model<UsersAttributes> {
  public readonly idx!: number
  public email!: string
  public password!: string
  public name!: string
  public birth!: Date
  public provider!: Provider
  public providerId!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {}
}

//? 모델 생성
Users.init(
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
    birth: {
      type: DataTypes.DATE,
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
    modelName: "Users",
    tableName: "tbl_user",
    sequelize,
    freezeTableName: true,
  }
)
