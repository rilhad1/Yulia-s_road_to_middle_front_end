import express from 'express';

const router = express.Router();

import categoryController from "../controllers/category.conroller";

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getById);
router.post('/create', categoryController.create);
router.put('/update', categoryController.update);
router.delete('/delete', categoryController.delete);

export default router;
