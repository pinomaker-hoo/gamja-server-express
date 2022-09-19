import { Response, Request } from "express"
import { User } from "../../models/domain/User"
import { Provider } from "../../models/interface/Provider"
import * as bcrypt from "bcryptjs"
import passport from "passport"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

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
exports.test = async (req: Request, res: Response) => {
  console.log("Hello world")
  res.json("Hello world")
}
