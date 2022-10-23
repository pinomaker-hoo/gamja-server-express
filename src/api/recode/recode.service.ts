import { Response, Request } from "express"
import { Recode } from "../../models/domain/Recode"

exports.saveRecode = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { menu, kcal, weight } = req.body
    const recode: Recode = await Recode.create({
      menu,
      userIdx: user.idx,
      kcal,
      weight,
    })
    res.json(recode)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

exports.getRecode = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const recode: Recode[] = await Recode.findAll({
      where: { userIdx: user.idx },
    })
    res.json(recode)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

exports.getRecodeByDay = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const recode: Recode[] = await Recode.findAll({
      where: { userIdx: user.idx },
    })
    const today = await getDay(new Date())
    res
      .status(200)
      .json(
        [...recode].filter(
          async (item: any) => (await getDay(item.createdAt)) === "1"
        )
      )
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

const getDay = async (date: Date) => {
  console.log(date)
  const year = date.getFullYear()
  const month = ("0" + (date.getMonth() + 1)).slice(-2)
  const day = ("0" + date.getDate()).slice(-2)
  const a = year + "-" + month + "-" + day
  console.log(a)
  return a
}
