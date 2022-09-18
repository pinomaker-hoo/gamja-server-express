import { DataTypes, Model } from "sequelize"
import sequelize from "../index"
import { RecodeAttributes } from "../interface/Recode"

export class Recode extends Model<RecodeAttributes> {
  public readonly idx!: number
  public date!: Date
  public kcal!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Recode.init(
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
    },
    kcal: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    modelName: "Recode",
    tableName: "tbl_recode",
    sequelize,
    freezeTableName: true,
  }
)
