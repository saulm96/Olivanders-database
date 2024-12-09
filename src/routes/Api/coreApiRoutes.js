import {Router} from "express";
import coreApiControllers from "../../controllers/cores/coreApiController.js";
import {isAdmin} from "../../middlewares/authMiddleware.js"

const router = Router();

router.get('/list' ,coreApiControllers.getAllCores);
router.get("/:id", coreApiControllers.getCoreById);

router.put("/:id", isAdmin ,coreApiControllers.updateCore);

router.post("/new", isAdmin, coreApiControllers.createCore);

router.delete("/:id", isAdmin, coreApiControllers.deleteCore);

export default router;
