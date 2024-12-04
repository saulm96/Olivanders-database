import {Router} from 'express';
import woodApiController from "../../controllers/woods/woodApiController.js";

const router = Router();

router.get('/list', woodApiController.getAllWoods);
router.get('/:id', woodApiController.getWoodById);

router.put('/:id', woodApiController.updateWood);

router.post('/:new',woodApiController.createWood);

router.delete('/:id', woodApiController.deleteWood);



export default router;
