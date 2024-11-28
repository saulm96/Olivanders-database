import {Router} from "express";
import userApiController from "../../controllers/users/userApiController.js";
const router = Router();

router.get("/list", userApiController.getallUsers);
router.get("/:id", userApiController.getUserById);

export default router;