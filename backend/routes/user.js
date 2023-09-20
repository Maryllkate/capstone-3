const express = require('express')
const app = express.Router();

const userController = require('../controllers/user.controllers')
const auth = require('../middlewares/authUser');
const { authUser, authRoles } = auth

app.route('/register').post(userController.registration);
app.route('/login').post(userController.loginUser);

app.route('/logout').get(authUser, userController.logoutUser);

app.route('/password/forgot').post(userController.forgotPassword);

app.route('/password/reset/:token').put(userController.resetPassword);



module.exports = app;
