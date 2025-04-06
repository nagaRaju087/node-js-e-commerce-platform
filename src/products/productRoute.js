const express = require('express');
const {insertProduct,getAllProduct,getProductById,updateProduct,deleteProduct} = require('./productController');
const authMiddleware = require('../../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware,insertProduct);
router.get('/', authMiddleware,getAllProduct);
router.get('/:id', authMiddleware,getProductById);
router.put('/:id', authMiddleware,updateProduct);
router.delete('/:id', authMiddleware,deleteProduct);

module.exports = router;
