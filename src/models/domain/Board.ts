import { DataTypes, Model } from "sequelize"
import sequelize from "../index"
import { BoardAttributes } from "../interface/Board"

export class Board extends Model<BoardAttributes> {
  public readonly idx!: number
  public title!: string
  public text!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Board.init(
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(45),
    },
    text: {
      type: DataTypes.STRING(255),
    },
  },
  {
    modelName: "Board",
    tableName: "tbl_board",
    sequelize,
    freezeTableName: true,
  }
)
