import {abstractActionResult, voidAbstractActionResult} from './controller.utils';
import {Request, Response} from "express";
import {MongooseDocument, Error, Document} from "mongoose";
import Customer from '../models/customers.model';

//Simple version, without validation or sanitation
export default {
    getAllCustomers(req: Request, res: Response): void {
        Customer.find({}, function (err: Error, docs: MongooseDocument): void {
            res.send(abstractActionResult(docs, err));
        })
    },
    getCustomerById(req: Request, res: Response): void {
        Customer.findById(req.params.id, function (err: Error, docs: MongooseDocument): void {
            res.send(abstractActionResult(docs, err));
        })
    },
    createCustomer(req: Request, res: Response): Promise<Document> {
        const customer = new Customer({
            _id: req.body._id,
            name: req.body.name,
            createdAt: Date.now(),
            createdByUser: req.body.createdByUser
        });

        return customer.save((err: Error): void => {
            res.send(voidAbstractActionResult(err));
        })
    },
    updateCustomer(req: Request, res: Response): void {
        res.send('Greetings from the Test controller!');
    },
    deleteCustomer(req: Request, res: Response): void {
        res.send('Greetings from the Test controller!');
    }
}