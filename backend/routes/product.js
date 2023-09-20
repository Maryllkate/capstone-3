const express = require('express');
const app = express.Router();

const { getProducts, newProduct } = require('../controllers/product.controllers');

app.route('/products').get(getProducts);
app.route('/product/new').post(newProduct)

module.exports = app;