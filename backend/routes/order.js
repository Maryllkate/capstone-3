const express = require('express');
const app = express.Router();

const orderController = require('../controllers/order.controllers');
const auth = require('../middlewares/authUser');
const { authUser, authRoles } = auth

app.route('/order/new').post(authUser, authRoles('user'), orderController.newOrder);






module.exports = app;