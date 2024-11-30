import {Router} from 'express';
import woodApiController from "../../controllers/woods/woodApiController.js";

const router = Router();

router.get('/list', woodApiController.getAllWoods);
router.get('/:id', woodApiController.getWoodById);

export default router;
