const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const DB_URL = `mongodb://${dbUser}:${dbPassword}@ds123963.mlab.com:23963/${dbName}`;
console.log('DB_URL', DB_URL);
const connectToDb = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    }).catch(err => console.log(err.reason));;
    mongoose.Promise = global.Promise;
    
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    return db;
}

module.exports = { connectToDb };