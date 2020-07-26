import express from 'express';
import {check} from 'express-validator';
import authController from '../controllers/auth.controller';
const router = express.Router();

router.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({ min: 6 })
    ],
    authController.register
);

router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    authController.login
);


module.exports = router;