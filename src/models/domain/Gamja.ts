import { Association, DataTypes, Model } from "sequelize"
import sequelize from "../index"
import { GamjaAttributes } from "../interface/Gamja"
import { User } from "./User"

export class Gamja extends Model<GamjaAttributes> {
  public readonly idx!: number
  public name!: string
  public exp!: number
  public userIdx!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {
    gamjaUser: Association<Gamja, User>
  }
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
    userIdx: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Gamja",
    tableName: "tbl_gamja",
    sequelize,
    freezeTableName: true,
  }
)

User.hasMany(Gamja, {
  sourceKey: "idx",
  foreignKey: "userIdx",
  as: "gamjaUser",
})

Gamja.belongsTo(User, {
  foreignKey: "userIdx",
  as: "gamjaUser",
})
