import {Request, Response} from "express";

import Category from '../models/category.model';
import {abstractActionResult, voidAbstractActionResult} from './controller.utils';
import {Document, MongooseDocument} from "mongoose";

export default {
    getAll(req: Request, res: Response): void {
        Category.find({}, function (err: Error, docs: MongooseDocument): void {
            res.send(abstractActionResult(docs, err));
        })
    },
    getById(req: Request, res: Response): void {
        Category.findById(req.params.id, function (err: Error, docs: MongooseDocument): void {
            res.send(abstractActionResult(docs, err));
        })
    },
    create(req: Request, res: Response): Promise<Document> {
        const category = new Category({
            _id: req.body._id,
            name: req.body.name
        });

        return category.save((err: Error): void => {
            res.send(voidAbstractActionResult(err));
        })
    },
    update(req: Request, res: Response): void {
        console.log(Category);
        res.send('Greetings from the Test controller!');
    },
    delete(req: Request, res: Response): void {
        console.log(Category);
        res.send('Greetings from the Test controller!');
    }
};
