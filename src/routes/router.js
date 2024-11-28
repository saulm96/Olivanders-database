import {Router} from 'express';
import apiRouter from './Api/apiRouter.js';

const router = Router();

router.use("/api", apiRouter); //For english content

export default router;



