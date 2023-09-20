const User = require('../models/user')

const ErrorHandler = require('../utils/errorhandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require('../utils/jwtToken')

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

