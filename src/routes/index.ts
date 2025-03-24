import { Application } from "express"
import { TestRoutes } from "./TestRoutes"

export default class Routes {
  constructor(server: Application) {
    server.use("/api/test", TestRoutes)
  }
}