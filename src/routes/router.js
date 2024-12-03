import {Router} from 'express';
import apiRouter from './Api/apiRouter.js';

const router = Router();

router.use("/api", apiRouter); 

export default router;



