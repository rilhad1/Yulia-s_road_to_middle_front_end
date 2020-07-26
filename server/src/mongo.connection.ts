import mongoose, {Connection} from "mongoose";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

console.log(dbUser, dbPassword, dbName);

const DB_URL = `mongodb+srv://${dbUser}:${dbPassword}@material-calc-lr65q.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectToDb = (): Connection => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(err => console.log(err.reason));
    mongoose.Promise = global.Promise;
    
    const dbConnection = mongoose.connection;
    dbConnection.on('error', err => console.log(`Connection error: ${err}`));
    dbConnection.once('open', () => console.log('Connected to DB!'));
    return dbConnection;
};

export default connectToDb;
