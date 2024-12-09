import {Router} from 'express';
import wandApiController from "../../controllers/wands/wandApiController.js";

const router = Router();

router.get('/list', wandApiController.getAllWands);
router.get('/:id', wandApiController.getWandById);

router.put('/:id', wandApiController.updateWand);

router.post('/new', wandApiController.createWand);

router.delete('/:id', wandApiController.deleteWand);

export default router;  