import {Router} from 'express';
import apiRouter from './Api/apiRouter.js';
import {isAuthenticated} from "../middlewares/authMiddleware.js"
import authApiController from "../controllers/auth/authApiController.js"

const router = Router();

router.use("/api", isAuthenticated ,apiRouter); 

router.post("/login", authApiController.login);
router.post("/register", authApiController.register);


export default router;



