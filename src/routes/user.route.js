const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/getUser', userController.getUser);
router.post('/createUser', userController.create);
router.put('/updateUser', userController.update);
router.delete('/deleteUser', userController.delete);

module.exports = router;