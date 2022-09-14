import { DataTypes, Model } from "sequelize"
import sequelize from "./index"

// user 모델의 구성요소를 명시
interface UsersAttributes {
  id?: number //? id는 not null autoincrement로 ?를 이용해 와일드 카드 적용.
  email: string //? 필요한 요소를 적어준다.
}

export class Users extends Model<UsersAttributes> {
  //? 조회 후 사용 되어질 요소들의 타입명시 설정이 되어 있지 않으면 조회시 또는 조회 후 데이터 타입체크에서 오류
  public readonly id!: number
  public email!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {}
}

//? 모델 생성
Users.init(
  {
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    modelName: "Users",
    tableName: "users",
    sequelize, //? 생성한 Sequelize 객체 패싱
    freezeTableName: true,
  }
)
