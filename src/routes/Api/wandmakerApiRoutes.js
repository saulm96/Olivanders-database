import { Router } from "express";
import wandmakerApiController from "../../controllers/wandmakers/wandmakerApiController.js"


const router = Router();

router.get("/list", wandmakerApiController.getAllWandmakers);
router.get("/:id", wandmakerApiController.getWandmakerById);

export default router;
