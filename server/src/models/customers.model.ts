import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
    name: {type: String, required: true, max: 100},
});

// Export the model
const model = mongoose.model('Customers', CustomersSchema, 'customers');
console.log('model', model)
export default model;