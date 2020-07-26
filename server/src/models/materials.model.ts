import mongoose from 'mongoose';
import { Int32, ObjectId } from 'mongodb';
const Schema = mongoose.Schema;

const MaterialsSchema = new Schema({
    name: {type: String, required: true, max: 100},
    description: {type: String},
    cost: {
        currency: {type: String},
        currencyCode: {type: String},
        price: {type: String},
        priceString: {type: String}
    },
    size: {
        x: {type: Int32},
        y: {type: Int32},
        z: {type: Int32},
    },
    categoryId: {type: ObjectId, required: true}
});

// Export the model
export default mongoose.model('Materials', MaterialsSchema, 'materials');