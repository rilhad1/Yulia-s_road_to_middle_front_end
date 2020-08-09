import express, {Application} from "express";
import path from 'path';
import {Connection} from "mongoose";
import cors from 'cors';
import {graphqlHTTP} from 'express-graphql';

import {config} from 'dotenv';
import connectToDb from './src/mongo.connection';
import schema from './src/graphql/root.schema';

config({path: __dirname + '/.env'});

const app: Application = express();
const db: Connection = connectToDb();

if (process.env.NODE_ENV === 'production') {
    // app.use('/', express.static( path.join(__dirname, './../', 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './../', 'client', 'build', 'index.html'))
    })
}

// @ts-ignore
app.use(express.json({ extended: true}));
app.use(cors());

app.use('/api/auth', require('./src/routes/auth.routes'));


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));


const port = process.env.PORT || 8000;

app.listen(port, (): void => {
    console.log('Server is up and running on port ' + port);
});

export default db;
