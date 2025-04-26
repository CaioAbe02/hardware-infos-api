import { Router } from "express"
import TestController from "../controllers/TestController"

const router: Router = Router()
const controller = new TestController()

router.get("/", controller.hello)

export { router as TestRoutes }