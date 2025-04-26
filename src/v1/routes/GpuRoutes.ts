import { Router } from "express"
import GpuController from "../controllers/GpuController"

const router: Router = Router()
const controller = new GpuController()

router.post("/", controller.create)
router.get("/", controller.findAll)
router.get("/:id", controller.findById)
router.put("/:id", controller.update)

export { router as GpuRoutes }