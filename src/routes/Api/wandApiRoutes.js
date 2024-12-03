import {Router} from 'express';
import wandApiController from "../../controllers/wands/wandApiController.js";

const router = Router();

router.get('/list', wandApiController.getAllWands);
router.get('/:id', wandApiController.getWandById);
export default router;  