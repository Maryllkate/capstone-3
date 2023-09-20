const express = require('express');
const app = express.Router();

const { getProducts } = require('../controllers/product.controllers');

app.route('/products').get(getProducts);

module.exports = app;