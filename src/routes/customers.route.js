const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customers.controller');

router.get('/getAllCustomers', customersController.getAllCustomers);
router.get('/getCustomerById', customersController.getCustomerById);
router.post('/createCustomer', customersController.createCustomer);
router.put('/updateCustomer', customersController.updateCustomer);
router.delete('/deleteCustomer', customersController.deleteCustomer);

module.exports = router;