import { Response, Request } from "express"
import { Board } from "../../models/domain/Board"
import { User } from "../../models/domain/User"

exports.saveBoard = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { title, text } = req.body
    const savePost = await Board.create({
      title,
      text,
      userIdx: user.idx,
      imgPath: "",
    })
    res.status(200).json(savePost)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

exports.getBoardList = async (req: Request, res: Response) => {
  try {
    const boardList = await Board.findAll({
      order: [["createdAt", "desc"]],
      include: [
        {
          model: User,
          as: "boardUser",
        },
      ],
    })
    res.status(200).json(boardList)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

exports.getBoard = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const findBoard = await Board.findOne({ where: { idx } })
    const user = await User.findOne({
      where: { idx: findBoard?.userIdx },
    })
    res.status(200).json({ findBoard, user })
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

exports.getMyBoardList = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const findBoardList = await Board.findAll({ where: { userIdx: user.idx } })
    res.status(200).json({ data: findBoardList, user })
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

exports.deleteBoard = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const deleteBoard = await Board.destroy({ where: { idx } })
    res.status(200).json(deleteBoard)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

exports.updateBoard = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const { title, text } = req.body
    const updateBoard = await Board.update({ title, text }, { where: { idx } })
    res.status(200).json(updateBoard)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}
