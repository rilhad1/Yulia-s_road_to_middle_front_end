import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CalculationSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true, max: 100},
});

// Export the model
export default mongoose.model('Calculation', CalculationSchema);