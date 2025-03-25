const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('./productController');
const authMiddleware = require('../../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware);
router.get('/', authMiddleware);
router.get('/:id', authMiddleware,);
router.put('/:id', authMiddleware,);
router.delete('/:id', authMiddleware,);

module.exports = router;
