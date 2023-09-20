const express = require('express')
const app = express.Router();

const userController = require('../controllers/user.controllers')


app.route('/register').post(userController.registration);
app.route('/login').post(userController.loginUser);



module.exports = app;
