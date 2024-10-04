const router = require('express').Router();
const productController = require('../controllers/ProductController');
router.post('/add', productController.addProduct);
router.get('/all', productController.getAllProducts);
module.exports = router;