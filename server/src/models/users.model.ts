import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: {type: String, required: true, max: 32},
    passwordHash: {type: String, required: true, max: 32},
    firstName: {type: String, max: 32},
    lastName: {type: String, max: 32},
    email: {type: String, required: true, max: 32, unique: true},
    gender: {type: String, max: 32},
    phone: {type: String, max: 32},
    avatar: {type: String, max: 32},
    companyId: Schema.Types.ObjectId,
    address: {
        city: {type: String, max: 32},
        street: {type: String, max: 32},
        streetNumber: {type: String, max: 32},
        country: {type: String, max: 32},
        countryCode: {type: String, max: 32}
    },
    customerIds: [Schema.Types.ObjectId],
    createdAt: {type: Date, required: true}
});

export default mongoose.model('User', UserSchema, 'users');