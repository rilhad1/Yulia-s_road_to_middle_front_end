import {Request, Response} from "express";
import User from '../models/users.model';
import {abstractActionResult, voidAbstractActionResult} from './controller.utils';
import {Document, Error} from "mongoose";

export default {
    getUser(req: Request, res: Response): void {
        User.findOne({login: req.body.login, password: req.body.password}, function (err, user: Document): void {
            console.log(user);
            res.send(abstractActionResult(user, err));
        })
    },
    create(req: Request, res: Response): Promise<Document> {
        const user = new User({
            _id: req.body._id,
            login: req.body.login,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            createdAt: Date.now(),
        });

        return user.save((err: Error): void => {
            res.send(voidAbstractActionResult(err));
        })
    },
    update(req: Request, res: Response): void {
        res.send('Greetings from the Test controller!');
    },
    delete(req: Request, res: Response): void {
        res.send('Greetings from the Test controller!');
    }
}