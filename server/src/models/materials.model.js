const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaterialsSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    categoryId: {type: String, required: true}
});

// Export the model
module.exports = mongoose.model('Materials', MaterialsSchema);