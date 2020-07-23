import express, {Application, NextFunction, Request, Response} from "express";
import bodyParser from 'body-parser';
import path from 'path';
import {Connection} from "mongoose";
import envVariables from 'dotenv';
import cors from 'cors';

import category from './src/routes/category.route';
import users from './src/routes/user.route';
import customers from './src/routes/customers.route';

import connectToDb from './src/mongo.connection';

envVariables.config({path: __dirname + '/.env'});

const app: Application = express();
const db: Connection = connectToDb();

app.use(cors());

app.get('/', (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req: Request, res: Response, next: NextFunction): void => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/category', category);
app.use('/users', users);
app.use('/customers', customers);

const port = process.env.PORT || 8000;

app.listen(port, (): void => {
    console.log('Server is up and running on port ' + port);
});

export default db;