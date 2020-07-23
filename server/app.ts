import express, {Application, Request, Response} from "express";
import bodyParser from 'body-parser';
import path from 'path';
import {Connection} from "mongoose";
import cors from 'cors';
import {graphqlHTTP} from 'express-graphql';

import {config} from 'dotenv';
config({path: __dirname + '/.env'});

// import category from './src/routes/category.route';
// import users from './src/routes/user.route';
// import customers from './src/routes/customers.route';

import connectToDb from './src/mongo.connection';
import schema from './src/graphql/root.schema';

const app: Application = express();
const db: Connection = connectToDb();

app.use(cors());

app.get('/', (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// //
// app.use('/category', category);
// app.use('/users', users);
// app.use('/customers', customers);

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));


const port = process.env.PORT || 8000;

app.listen(port, (): void => {
    console.log('Server is up and running on port ' + port);
});

export default db;