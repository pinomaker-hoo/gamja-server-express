import { Response, Request } from "express"
import { validateLocaleAndSetLanguage } from "typescript"
import { Gamja } from "../../models/domain/Gamja"

exports.saveGamja = async (req: Request, res: Response) => {
  try {
    const { name, userIdx } = req.body
    const gamja: Gamja = await Gamja.create({ name, exp: 0, userIdx })
    res.json(gamja)
  } catch (err) {
    res.json(err)
  }
}

exports.updateName = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const { name } = req.body
    const gamja = await Gamja.update({ name }, { where: { idx } })
    res.json(gamja)
  } catch (err) {
    res.json(err)
  }
}

exports.getGamja = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const gamja = await Gamja.findOne({ where: { idx } })
    res.json(gamja)
  } catch (err) {
    res.json(err)
  }
}

exports.updateGamjaExp = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const { exp } = req.body
    const gamja = await Gamja.update({ exp }, { where: { idx } })
    console.log(gamja)
    res.json(gamja)
  } catch (err) {
    res.json(err)
  }
}

exports.getGamjaRankList = async (req: Request, res: Response) => {
  try {
    const gamjaList = await Gamja.findAll({ order: [["exp", "desc"]] })
    console.log(gamjaList)
    res.json(gamjaList)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}
