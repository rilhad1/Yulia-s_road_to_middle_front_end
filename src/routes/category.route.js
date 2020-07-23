const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.conroller');

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getById);
router.post('/create', categoryController.create);
router.put('/update', categoryController.update);
router.delete('/delete', categoryController.delete);

module.exports = router;