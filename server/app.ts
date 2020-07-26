import express, {Application, NextFunction, Request, Response} from "express";
import path from 'path';
import {Connection} from "mongoose";
import cors from 'cors';
import {graphqlHTTP} from 'express-graphql';

import {config} from 'dotenv';
config({path: __dirname + '/.env'});
import connectToDb from './src/mongo.connection';
import schema from './src/graphql/root.schema';

const app: Application = express();
const db: Connection = connectToDb();

app.use(cors());

app.get('/', (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));


const port = process.env.PORT || 8000;

app.listen(port, (): void => {
    console.log('Server is up and running on port ' + port);
});

export default db;