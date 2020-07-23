import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    _id: {type: String, required: true},
    login: {type: String, required: true, max: 32},
    password: {type: String, required: true, max: 32},
    firstName: {type: String, required: true, max: 32},
    lastName: {type: String, required: true, max: 32},
    createdAt: {type: Date, required: true}
});

export default mongoose.model('Users', UsersSchema);