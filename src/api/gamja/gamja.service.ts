import { Response, Request } from "express"
import { Gamja } from "../../models/domain/Gamja"

exports.saveGamja = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { name } = req.body
    const gamja: Gamja = await Gamja.create({ name, exp: 0, userIdx: user.idx })
    res.json(gamja)
  } catch (err) {
    res.json(err)
  }
}

exports.updateName = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { name } = req.body
    const gamja = await Gamja.update({ name }, { where: { userIdx: user.idx } })
    res.json(gamja)
  } catch (err) {
    res.json(err)
  }
}

exports.getGamja = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const gamja = await Gamja.findOne({ where: { userIdx: user.idx } })
    res.json(gamja)
  } catch (err) {
    res.json(err)
  }
}

exports.updateGamjaExp = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { exp } = req.body
    const gamja = await Gamja.update({ exp }, { where: { userIdx: user.idx } })
    res.json(gamja)
  } catch (err) {
    res.json(err)
  }
}

exports.getGamjaRankList = async (req: Request, res: Response) => {
  try {
    const gamjaList = await Gamja.findAll({ order: [["exp", "desc"]] })
    res.json(gamjaList)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}
