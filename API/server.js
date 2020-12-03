let createError = require('http-errors');
let express = require('express');
let path = require('path');
let morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static( path.resolve(__dirname, '../build')));

    // app.get('*', (req, res) => {
    //     const fileLocation = (path.resolve(__dirname, '../build', 'index.html'))
    //     res.sendFile(fileLocation);
    //     console.log(fileLocation);
    // });
}

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
// view engine setup
