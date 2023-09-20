const express = require('express')
const app = express.Router();

const userController = require('../controllers/user.controllers')
const auth = require('../middlewares/authUser');
const { isAuthenticatedUser } = auth

app.route('/register').post(isAuthenticatedUser, userController.registration);
app.route('/login').post(userController.loginUser);

app.route('/logout').get(userController.logoutUser);



module.exports = app;
