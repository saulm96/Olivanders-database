import {Router} from "express";
import coreApiControllers from "../../controllers/cores/coreApiController.js";

const router = Router();

router.get('/list', coreApiControllers.getAllCores);
router.get("/:id", coreApiControllers.getCoreById);

router.put("/:id", coreApiControllers.updateCore);

router.post("/new", coreApiControllers.createCore);

router.delete("/:id", coreApiControllers.deleteCore);

export default router;