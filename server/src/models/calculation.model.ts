import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CalculationSchema = new Schema({
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 200},
    customerId: Schema.Types.ObjectId,
    materialsIds: [Schema.Types.ObjectId]
});

// Export the model
export default mongoose.model('Calculation', CalculationSchema, 'calculations');