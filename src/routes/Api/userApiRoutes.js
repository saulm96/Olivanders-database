import {Router} from "express";
import userApiController from "../../controllers/users/userApiController.js";
const router = Router();

router.get("/list", userApiController.getallUsers);
router.get("/:id", userApiController.getUserById);

router.post("/new", userApiController.createUser);

router.put("/:id", userApiController.updateUser);

router.delete("/:id", userApiController.deleteUser);
export default router;