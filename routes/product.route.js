import express from 'express';
import * as obj from '../controllers/product.controller.js'

const router = express.Router();


router.get('/', obj.getProducts);

router.get('/:id', obj.getProduct);

router.post('/', obj.postProduct);

router.put('/:id', obj.updateProduct);

router.delete('/:id', obj.deleteProduct);



export default router;


