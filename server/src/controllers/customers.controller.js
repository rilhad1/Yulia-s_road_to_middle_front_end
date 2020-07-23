import {abstractActionResult, voidAbstractActionResult} from './controller.utils';
const Customer = require('../models/customers.model');

//Simple version, without validation or sanitation
export default {
    getAllCustomers(req, res) {
        Customer.find({}, function (err, docs) {
            res.send(abstractActionResult(docs, err));
        })
    },
    getCustomerById(req, res) {
        Customer.findById(req.params.id, function (err, docs) {
            res.send(abstractActionResult(docs, err));
        })
    },
    createCustomer(req, res) {
        const customer = new Customer({
            _id: req.body._id,
            name: req.body.name,
            createdAt: Date.now(),
            createdByUser: req.body.createdByUser
        });

        customer.save((err) => {
            res.send(voidAbstractActionResult(err));
        })
    },
    updateCustomer(req, res) {
        res.send('Greetings from the Test controller!');
    },
    deleteCustomer(req, res) {
        res.send('Greetings from the Test controller!');
    }
}