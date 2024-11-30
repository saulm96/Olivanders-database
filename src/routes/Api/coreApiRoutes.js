import {Router} from "express";
import coreApiControllers from "../../controllers/cores/coreApiController.js";

const router = Router();

router.get('/list', coreApiControllers.getAllCores);
router.get("/:id", coreApiControllers.getCoreById);

export default router;