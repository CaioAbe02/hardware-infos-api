import { Application } from "express"
import { TestRoutes } from "./TestRoutes"
import { GpuRoutes } from "./GpuRoutes"

export default class Routes {
  constructor(server: Application) {
    server.use("/api/v1/test", TestRoutes)
    server.use("/api/v1/gpus", GpuRoutes)
  }
}