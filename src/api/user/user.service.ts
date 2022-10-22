import { Response, Request } from "express"
import { User } from "../../models/domain/User"
import * as bcrypt from "bcryptjs"
import passport from "passport"
import jwt from "jsonwebtoken"

exports.localSave = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body
    const hash = await bcrypt.hash(password, 10)
    const saveUser = await User.create({
      email,
      password: hash,
      name,
    })
    res.json({ saveUser })
  } catch (err) {
    console.log(err)
  }
}

exports.localLogin = async (req: Request, res: Response) => {
  console.log(1)
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      })
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        console.log(err)
        res.send(err)
      }
      const token = jwt.sign({ idx: user.idx }, "123")
      res.cookie("accessToken", token, {
        expires: new Date(Date.now() + 86400e3),
        sameSite: "lax",
      })
      return res.send({ user, token })
    })
  })(req, res)
}

exports.nameUpdate = async (req: Request, res: Response) => {
  try {
    const { name } = req.body
    const user: any = req.user
    const updateUser = await User.update({ name }, { where: { idx: user.idx } })
    res.status(200).json(updateUser)
  } catch (err) {
    res.status(400).json(err)
  }
}

exports.passwordUpdate = async (req: Request, res: Response) => {
  try {
    const { password } = req.body
    const user: any = req.user
    const hash = await bcrypt.hash(password, 10)
    const updateUser = await User.update(
      { password: hash },
      { where: { idx: user.idx } }
    )
    res.status(200).json(updateUser)
  } catch (err) {
    res.status(400).json(err)
  }
}
