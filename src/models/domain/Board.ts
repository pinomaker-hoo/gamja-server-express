import { Association, DataTypes, Model } from "sequelize"
import sequelize from "../index"
import { BoardAttributes } from "../interface/Board"
import { User } from "./User"

export class Board extends Model<BoardAttributes> {
  public readonly idx!: number
  public title!: string
  public text!: string
  public userIdx!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {
    boardUser: Association<Board, User>
  }
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
    userIdx: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Board",
    tableName: "tbl_board",
    sequelize,
    freezeTableName: true,
  }
)

User.hasMany(Board, {
  sourceKey: "idx",
  foreignKey: "userIdx",
  as: "boardUser",
})

Board.belongsTo(User, {
  foreignKey: "userIdx",
  as: "boardUser",
})
