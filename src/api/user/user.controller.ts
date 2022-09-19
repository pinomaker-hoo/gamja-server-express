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
      // jwt.sign('token내용', 'JWT secretkey')
      const token = jwt.sign({ name: "hello" }, "123")
      return res.json({ user, token })
    })
  })(req, res)
}
