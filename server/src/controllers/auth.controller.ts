import {Request, Response} from "express";
import {validationResult} from "express-validator";
import User from "../models/users.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jwtSecret from "../config/jwt.secret";

export default {
    async login(req: Request, res: Response) {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong data'
                })
            }

            const {email, password} = req.body;

            const user = await User.findOne({ email })

            if (!user) {
                return res.status(400).json({ message: 'User is not found' })
            }

            // @ts-ignore
            const isMatch = await bcrypt.compare(password, user.passwordHash)

            if (!isMatch) {
                return res.status(400).json({ message: 'Incorrect password, please try again' })
            }

            const token = jwt.sign(
                { userId: user.id },
                jwtSecret,
                { expiresIn: '1h' }
            );

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, try again' })
        }
    },
    async register(req: Request, res: Response) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong registration data'
                })
            }

            const {email, login, password} = req.body;

            const candidate = await User.findOne({ email });

            if (candidate) {
                return res.status(400).json({ message: 'This user already exist' })
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ login, email, passwordHash: hashedPassword, createdAt: new Date() });

            await user.save();

            res.status(201).json({ message: 'User created' })

        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, try again' })
        }
    }
}