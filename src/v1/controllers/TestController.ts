import { Request, Response } from "express"

export default class TestController {
  async hello(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "hello world!"
      })
    }
    catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      })
    }
  }
}