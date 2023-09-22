const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const path = require('path')

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(cors());

//routes
const products = require('./routes/product');
const users = require('./routes/user');
const orders = require('./routes/order');

app.use('/api/v1', products)
app.use('/api/v1', users)
app.use('/api/v1', orders)

if(process.env.NODE_ENV === 'PRODUCTION'){
    app.use(express.static(path.join(_dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, '../frontend/dist/index.html'))
    })
}

//Middleware for handling errors
app.use(errorMiddleware);

module.exports = app