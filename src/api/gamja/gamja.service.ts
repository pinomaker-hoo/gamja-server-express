import { Response, Request } from "express"
import { Gamja } from "../../models/domain/Gamja"

exports.saveGamja = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { name } = req.body
    const gamja: Gamja = await Gamja.create({ name, exp: 0, userIdx: user.idx })
    res.status(200).json(gamja)
  } catch (err) {
    res.status(400).json(err)
  }
}

exports.updateName = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { name } = req.body
    const gamja = await Gamja.update({ name }, { where: { userIdx: user.idx } })
    res.status(200).json(gamja)
  } catch (err) {
    res.status(400).json(err)
  }
}

exports.getGamja = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const gamja = await Gamja.findOne({ where: { userIdx: user.idx } })
    res.status(200).json(gamja)
  } catch (err) {
    res.status(400).json(err)
  }
}

exports.updateGamjaExp = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { exp } = req.body
    const gamja = await Gamja.update({ exp }, { where: { userIdx: user.idx } })
    res.status(200).json(gamja)
  } catch (err) {
    res.status(400).json(err)
  }
}

exports.getGamjaRankList = async (req: Request, res: Response) => {
  try {
    const gamjaList = await Gamja.findAll({ order: [["exp", "desc"]] })
    res.status(200).json(gamjaList)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}
