import { DataTypes, Model } from "sequelize"
import sequelize from "../index"
import { GamjaAttributes } from "../interface/Gamja"

export class Gamja extends Model<GamjaAttributes> {
  public readonly idx!: number
  public name!: string
  public exp!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Gamja.init(
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
    modelName: "Gamja",
    tableName: "tbl_gamja",
    sequelize,
    freezeTableName: true,
  }
)
