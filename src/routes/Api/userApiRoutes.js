import {Router} from "express";
import userApiController from "../../controllers/users/userApiController.js";
import {isAdmin} from "../../middlewares/authMiddleware.js"
const router = Router();

router.get("/list", userApiController.getallUsers);
router.get("/:id", userApiController.getUserById);

router.post("/new", isAdmin, userApiController.createUser);

router.put("/:id",isAdmin ,userApiController.updateUser);

router.delete("/:id", isAdmin, userApiController.deleteUser);
export default router;