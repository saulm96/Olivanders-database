import { Router } from "express";
import wandmakerApiController from "../../controllers/wandmakers/wandmakerApiController.js"


const router = Router();

router.get("/list", wandmakerApiController.getAllWandmakers);
router.get("/:id", wandmakerApiController.getWandmakerById);

router.put("/:id", wandmakerApiController.updateWandmaker);

router.post("/new", wandmakerApiController.createWandmaker);

router.delete("/:id", wandmakerApiController.deleteWandmaker);

export default router;
