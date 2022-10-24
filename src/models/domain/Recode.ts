import { Association, DataTypes, Model } from "sequelize"
import sequelize from "../index"
import { RecodeAttributes } from "../interface/Recode"
import { User } from "./User"

export class Recode extends Model<RecodeAttributes> {
  public readonly idx!: number
  public menu!: string
  public kcal!: number
  public weight!: number
  public userIdx!: number
  public imgPath!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {
    recodeUser: Association<Recode, User>
  }
}

Recode.init(
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    menu: {
      type: DataTypes.STRING,
    },
    kcal: {
      type: DataTypes.DOUBLE,
    },
    weight: {
      type: DataTypes.DOUBLE,
    },
    imgPath: {
      type: DataTypes.STRING,
    },
    userIdx: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Recode",
    tableName: "tbl_recode",
    sequelize,
    freezeTableName: true,
  }
)
User.hasMany(Recode, {
  sourceKey: "idx",
  foreignKey: "userIdx",
  as: "recodeUser",
})

Recode.belongsTo(User, {
  foreignKey: "userIdx",
  as: "recodeUser",
})
