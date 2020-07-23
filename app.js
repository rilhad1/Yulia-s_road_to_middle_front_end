const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({path: __dirname + '/.env'});
const category = require('./src/routes/category.route');
const users = require('./src/routes/user.route');
const customers = require('./src/routes/customers.route');
const {connectToDb} = require('./src/mongo.connection');

const app = express();
const db = connectToDb();


app.get('/', function(req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/category', category);
app.use('/users', users);
app.use('/customers', customers);

let port = process.env.PORT || 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

module.exports = db;