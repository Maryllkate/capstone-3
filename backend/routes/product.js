const express = require('express');
const app = express.Router();

const productController = require('../controllers/product.controllers');
const auth = require('../middlewares/authUser');
const { isAuthenticatedUser } = auth


app.route('/products').get(productController.getProducts);
app.route('/product/:id').get(productController.getSingleProduct)


app.route('/admin/product/:id').put(isAuthenticatedUser, productController.updateSingleProduct)


app.route('/admin/product/:id').delete(isAuthenticatedUser, productController.deleteSingleProduct)


app.route('/admin/product/new').post(productController.newProduct)

module.exports = app;