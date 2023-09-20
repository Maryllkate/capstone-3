const User = require('../models/user')

const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorHandler = require('../utils/errorhandler');
const jwt = require('jsonwebtoken')

//authentication of user 
module.exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {

    const { token } = req.cookies
    
    if(!token){
        return next(new ErrorHandler('Login first to access this resource.', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id);

    next()

})