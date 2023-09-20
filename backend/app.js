const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//routes
const products = require('./routes/product')

app.use('/api/v1', products)

module.exports = app