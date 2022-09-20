import { Response, Request } from "express"
import { Recode } from "../../models/domain/Recode"

exports.saveRecode = async (req: Request, res: Response) => {
  try {
    const { menu, userIdx, kcal } = req.body
    const recode: Recode = await Recode.create({ menu, userIdx, kcal })
    res.json(recode)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

exports.getRecode = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const recode = await Recode.findAll({ where: { userIdx: idx } })
    res.json(recode)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}
