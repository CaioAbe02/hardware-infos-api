import { Request, Response } from "express"
import Gpu from "../models/Gpu"

export default class GpuController {
  async create(req: Request, res: Response) {
    try {
      const gpu = await Gpu.create(req.body)
      res.status(201).json({
        message: "create OK",
        data: gpu
      })
    } catch (err: any) {
      res.status(400).json({
        message: err._message,
      })
    }
  }
  async findAll(req: Request, res: Response) {
    try {
      const gpus = await Gpu.find()
      res.status(200).json({
        message: "findAll OK",
        data: gpus
      })
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      })
    }
  }
  async findById(req: Request, res: Response) {
    try {
      const gpu = await Gpu.findById(req.params.id)
      res.status(200).json({
        message: "findById OK",
        data: gpu
      })
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      })
    }
  }
  async update(req: Request, res: Response) {
    try {
      const gpu = await Gpu.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(201).json({
        message: "update OK",
        data: gpu
      })
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      })
    }
  }
}