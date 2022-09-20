import { Request, Response } from "express"
import { UserInfo } from "../../models/domain/UserInfo"

exports.infoSave = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { gender, height, weight, birth } = req.body
    const userInfo = await UserInfo.create({
      gender,
      height,
      weight,
      birth,
      userIdx: user.idx,
    })
    res.json(userInfo)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

exports.getInfo = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const info = await UserInfo.findOne({ where: { userIdx: user.idx } })
    res.json(info)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

//   public birth!: Date
//   public gender!: boolean
//   public height!: number
//   public weight!: number
//   public userIdx!: number
