import { Response, Request } from "express"

exports.test = (req: Request, res: Response) => {
  res.send("Hello world12")
}
