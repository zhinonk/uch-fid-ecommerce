const {Router} = require ('express');
const router = Router();

const { route } = require('.');
const ProductController = require('../controler/ProductController')


router.get('/:id([0-9])', ProductController.getProductById);
router.get('/', ProductController.getAll);
router.post('/', ProductController.saveProduct);
router.put('/:id', ProductController.updateById);
router.delete('/:id', ProductController.deleteById)


module.exports = router;