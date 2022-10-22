import { Request, Response } from "express"
import { UserInfo } from "../../models/domain/UserInfo"

exports.infoSave = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { gender, height, weight, move } = req.body
    const goalKcal: number = getGoalKcal(height, move, weight, gender)
    const userInfo = await UserInfo.create({
      gender,
      height,
      weight,
      goalKcal,
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

const getGoalKcal = (
  height: number,
  move: number,
  weight: number,
  gender: boolean
): number => {
  const avgWeight: number = (height - 100) * 0.9
  let goalKcal: number = 0
  switch (move) {
    case 0:
      goalKcal = avgWeight * 25
      break
    case 1:
      goalKcal = avgWeight * 30
      break
    case 2:
      goalKcal = avgWeight * 35
      break
  }
  if (!gender && weight < 60) goalKcal - 200
  return goalKcal
}
