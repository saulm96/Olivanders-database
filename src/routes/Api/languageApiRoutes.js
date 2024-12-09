import {Router} from "express";
import languageApiController from "../../controllers/languages/languageApiController.js";
import { isAdmin } from "../../middlewares/authMiddleware.js";
const router = Router();

router.get("/list", isAdmin, languageApiController.getAllLanguages);
router.post("/new", isAdmin, languageApiController.createNewLanguage);
router.delete("/:id", isAdmin, languageApiController.deleteLanguage);
export default router;