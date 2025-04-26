import express from "express"
import Routes from "./v1/routes"
import cors from "cors"

export class App {
  public server: express.Application

  constructor() {
    this.server = express()
    this.middleware()
    this.router()
    this.server.use(cors())
  }

  private middleware() {
    this.server.use(express.json())
  }

  private router() {
    new Routes(this.server)
  }
}