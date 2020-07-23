const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true, max: 100},
});

// Export the model
module.exports = mongoose.model('Category', CategorySchema);