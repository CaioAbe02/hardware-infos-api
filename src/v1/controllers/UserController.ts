import { Request, Response } from "express"
import User from "../models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default class UserController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email })

      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return
      }

      const valid_password = await bcrypt.compare(password, user.password)
      if (!valid_password) {
        res.status(401).json({ message: "Invalid password" })
        return
      }

      const secret = process.env.SECRET

      if (!secret) {
        res.status(500).json({ message: "Internal Server Error" })
        return
      }

      const token = jwt.sign({ id: user._id }, secret)

      res.status(200).json({
        message: 'login OK',
        token,
      })
    } catch (err: any) {
      res.status(500).json({
        message: err._message
      })
    }
  }
  async create(req: Request, res: Response) {
    try {
      const { username, email, password, role } = req.body
      const existing_user = await User.findOne({ email })

      if (existing_user) {
        res.status(400).json({ message: "User already exists" })
        return
      }

      const hashed_password = await bcrypt.hash(password, 10)

      const new_user = new User({
        username,
        email,
        password: hashed_password,
        role
      })

      await new_user.save()

      res.status(200).json({
        message: "register OK",
      })
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
  }
}