import {Router} from 'express';
import userRoute from "./userApiRoutes.js";
import coreRoutes from "./coreApiRoutes.js"
import woodRoutes from "./woodApiRoutes.js"
import wandmakerRoute from "./wandmakerApiRoutes.js"

const router = Router();


router.use("/core", coreRoutes);
router.use("/user", userRoute);
router.use("/wood", woodRoutes);
router.use("/wandmaker", wandmakerRoute);
export default router;