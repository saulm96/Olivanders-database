import {Router} from 'express';
import userRoute from "./userApiRoutes.js";
import coreRoutes from "./coreApiRoutes.js"
import woodRoutes from "./woodApiRoutes.js"
import wandmakerRoute from "./wandmakerApiRoutes.js"
import wandRoutes from "./wandApiRoutes.js"
import languageRoutes from "./languageApiRoutes.js"



const router = Router();

router.use("/user", userRoute);
router.use("/wand", wandRoutes);
router.use("/core", coreRoutes);
router.use("/wood", woodRoutes);
router.use("/wandmaker", wandmakerRoute);
router.use("/language", languageRoutes);


export default router;