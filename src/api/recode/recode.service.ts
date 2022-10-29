import { Response, Request } from "express"
import { rmSync } from "fs"
import { Recode } from "../../models/domain/Recode"
import { decodeBase } from "../../utils/base64"
import { getDay, getNumber } from "../../utils/other"

exports.saveRecode = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const { menu, kcal, weight, base } = req.body
    const imgPath: string = (await baseToImg(base)) || ""
    const recode: Recode = await Recode.create({
      menu,
      userIdx: Number(idx),
      kcal,
      weight,
      imgPath,
    })
    res.status(200).json(recode)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

exports.getRecode = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const recode: Recode[] = await Recode.findAll({
      where: { userIdx: user.idx },
    })
    res.status(200).json(recode)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
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

const baseToImg = async (encode: string) => {
  try {
    const path: string = `./src/source/img/base/${getNumber()}-${Date.now()}`
    const image = await decodeBase(encode, path, "jpg")
    return path
  } catch (err) {
    console.log(err)
  }
}
