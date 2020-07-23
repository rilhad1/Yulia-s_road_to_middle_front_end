import express from 'express';

const router = express.Router();

import userController from '../controllers/user.controller';

router.post('/getUser', userController.getUser);
router.post('/createUser', userController.create);
router.put('/updateUser', userController.update);
router.delete('/deleteUser', userController.delete);

export default router;