import { Router } from "express"
import UserController from "../controllers/UserController"

const router: Router = Router()
const controller = new UserController()

router.post("/", controller.login)

export { router as LoginRoutes }