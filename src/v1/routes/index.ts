import { Application } from "express"
import { TestRoutes } from "./TestRoutes"
import { GpuRoutes } from "./GpuRoutes"
import { LoginRoutes } from "./LoginRoutes"
import { UserRoutes } from "./UserRoutes"

export default class Routes {
  constructor(server: Application) {
    server.use("/api/v1/test", TestRoutes)
    server.use("/api/v1/gpus", GpuRoutes)
    server.use("/api/v1/login", LoginRoutes)
    server.use("/api/v1/users", UserRoutes)
  }
}