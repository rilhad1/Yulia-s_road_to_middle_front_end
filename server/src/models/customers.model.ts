import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
    firstName: {type: String, required: true, max: 32},
    lastName: {type: String, required: true, max: 32},
    email: {type: String, max: 32},
    gender: {type: String, max: 32},
    city: {type: String, max: 32},
    streetAddress: {type: String, max: 100},
    phoneNumber: {type: String},
    calculationIds: {type: Array}
});

// Export the model
const model = mongoose.model('Customers', CustomersSchema, 'customers');
export default model;