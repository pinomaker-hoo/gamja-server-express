import { Association, DataTypes, Model } from "sequelize"
import sequelize from "./index"
import { GamjasAttributes } from "./interface/Gamja"
import { Users } from "./User"

export class Gamjas extends Model<GamjasAttributes> {
  public readonly idx!: number
  public name!: string
  public exp!: number
  public userIdx?: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {}
}

//? 모델 생성
Gamjas.init(
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    modelName: "Gamjas",
    tableName: "tbl_gamja",
    sequelize,
    freezeTableName: true,
  }
)

Gamjas.belongsTo(Users, {
  foreignKey: "userIdx",
  as: "userIdx",
})
