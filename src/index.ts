import { App } from "./app"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = new App()
const port = process.env.PORT || 5000
const mongodb_url = process.env.MONGODB_URL || ""

mongoose.connect(mongodb_url)
app.server.listen(port)