import { Response, Request } from "express"
import { User } from "../../models/domain/User"
import { Provider } from "../../models/interface/Provider"
import * as bcrypt from "bcryptjs"
import passport from "passport"
import jwt from "jsonwebtoken"

exports.localSave = async (req: Request, res: Response) => {
  const { email, password, name } = req.body
  const hash = await bcrypt.hash(password, 10)
  try {
    const saveUser = await User.create({
      email,
      password: hash,
      name,
      provider: Provider.LOCAL,
    })
    res.json({ result: true })
  } catch (err) {
    console.log(err)
  }
}

exports.localLogin = async (req: Request, res: Response) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      })
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err)
      }
      const token = jwt.sign({ idx: user.idx }, "123")
      res.cookie("accessToken", token, {
        expires: new Date(Date.now() + 86400e3),
        sameSite: "lax",
      })
      return res.json({ user, token })
    })
  })(req, res)
}

exports.kakaoLogin = async (req: Request, res: Response) => {
  passport.authenticate("kakao", (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      })
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err)
      }
      const token = jwt.sign({ idx: user.idx }, "123")
      res.cookie("accessToken", token, {
        expires: new Date(Date.now() + 86400e3),
        sameSite: "lax",
      })
      return res.redirect("http://localhost:5173")
    })
  })(req, res)
}