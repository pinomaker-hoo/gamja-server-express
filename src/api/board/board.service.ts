import { Response, Request } from "express"
import { Board } from "../../models/domain/Board"

exports.saveBoard = async (req: Request, res: Response) => {
  try {
    const { title, text, userIdx } = req.body
    const savePost = await Board.create({ title, text, userIdx })
    res.json(savePost)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

exports.getBoardList = async (req: Request, res: Response) => {
  try {
    const boardList = await Board.findAll({ order: [["createdAt", "desc"]] })
    res.json(boardList)
  } catch (err) {
    res.json(err)
  }
}

exports.getBoard = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const findBoard = await Board.findOne({ where: { idx } })
    res.json(findBoard)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

exports.getMyBoardList = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const findBoardList = await Board.findAll({ where: { userIdx: idx } })
    res.json(findBoardList)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}
