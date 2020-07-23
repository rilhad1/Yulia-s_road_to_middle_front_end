import express from 'express';

const router = express.Router();

import customersController from '../controllers/customers.controller';

router.get('/getAllCustomers', customersController.getAllCustomers);
router.get('/getCustomerById', customersController.getCustomerById);
router.post('/createCustomer', customersController.createCustomer);
router.put('/updateCustomer', customersController.updateCustomer);
router.delete('/deleteCustomer', customersController.deleteCustomer);

export default router;