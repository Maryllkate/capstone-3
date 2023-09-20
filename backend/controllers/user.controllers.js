const User = require('../models/user')

const ErrorHandler = require('../utils/errorhandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail')

//POST - register a user => /api/v1/register
module.exports.registration = catchAsyncErrors( async (req, res, next) => {

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'animals/kitten-playing',
            url: 'https://res.cloudinary.com/daizfwwjg/image/upload/v1695224314/samples/animals/kitten-playing.gif'
        }
    })

    // const token = user.getJwtToken();

    // res.status(201).json({
    //     success: true,
    //     token
    // })

    sendToken(user, 200, res)
})

//Login user => /api/v1/login
module.exports.loginUser = catchAsyncErrors( async (req, res, next) => {
    const { email, password } = req.body;

    //checks if email and password is entered by user
    if(!email || !password){
        return next (new ErrorHandler('Please enter email & password', 400))
    }

    //finding user in DB
    const user = await User.findOne({ email }).select('+password')

    if(!user){
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    //checking if password is correct
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password'), 401)
    }

    sendToken(user, 200, res)

})

//forgot password => /api/v1/password/forgot

module.exports.forgotPassword = catchAsyncErrors (async(req, res, next) => {
    const user = await User.findOne({ email: req.body.email});

    if(!user) {
        return next( new ErrorHandler("There's no account with that email", 404 ))
    }

    //get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false})

    // create reset password URL
    const resetURL= `${req.protocol}://${req.get('host')}/api/v1/password/reset${resetToken}`;

    const message = `Your password reset token is as follow:\n\n${resetURL}\n\nIf you have not requested this email,
    then you don't have a choice., it was been reset by someone.`;

    try { //the 'options' in sendEmail.js

        await sendEmail({
            email: user.email,
            subject: 'E-Commerce Password Reset!',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email}`
        })
        
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetpasswordExpire = undefined;

        await user.save({ validateBeforeSave: false})

        return next(new ErrorHandler(error.message, 500))
        
    }

})

//logout user => /api/v1/logout
module.exports.logoutUser = catchAsyncErrors ( async(req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logout User"
    })
})

