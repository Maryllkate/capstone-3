// const ErrorHandler = require('../utils/errorhandler');

// module.exports = (err, req, res, next) => {
//     err.statusCode = err.statusCode || 500
    
//     if(process.env.NODE_ENV === 'DEVELOPMENT'){
//         res.status(err.statusCode).json({
//             success: false,
//             error: err,
//             errMessage: err.message,
//             stack: err.stack
//         })
//     }

//     if(process.env.NODE_ENV === 'PRODUCTION'){
//         let error = {...err}

//         error.message = err.message

//         //wrong mongoose object ID error
//         if (err.name === 'CastError') {
//             const message = `Resource not found. Invalid: ${err.path}`
//             error = new ErrorHandler(message, 400)
//         }

//         //handling mongoose validation error
//         if(err.name === 'ValidationError') {
//             const message = Object.values(err.errors).map(value => value.message);
//             error = new ErrorHanlder(message, 400)
//         }

//         //handling mongoose duplicate key errors
//         if(err.code === 11000) {
//             const message = `Duplicate ${Object.keys(err.KeyValue)} entered`
//         }

//         //handling wrong JWT error
//         if(err.name === 'JsonWebTokenError') {
//             const message = 'JSON Web Token is invalid. try again!!!'
//             error = new ErrorHandler(message, 400)

//         }

//         //handling expired JWT error
//         if(err.name === 'TokenExpiredError') {
//             const message = 'JSON Web Token is expired. try again!!!'
//             error = new ErrorHandler(message, 400)

//         }

//         res.status(err.statusCode).json({
//             success: false,
//             message: error.message || 'Internal Server Error'
    
            
//         })

//         }

// }

const ErrorHandler = require('../utils/errorhandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        console.error(err); // Log the error to the console for development debugging.
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errorMessage: err.message,
            stack: err.stack
        });
    }

    if (process.env.NODE_ENV === 'PRODUCTION') {
        let error = { ...err };
        error.message = err.message;

        // Wrong mongoose object ID error
        if (err.name === 'CastError') {
            const message = `Resource not found. Invalid: ${err.path}`;
            error = new ErrorHandler(message, 400);
        }

        // Handling mongoose validation error
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400);
        }

        // Handling mongoose duplicate key errors
        if (err.code === 11000) {
            const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
            error = new ErrorHandler(message, 400);
        }

        // Handling wrong JWT error
        if (err.name === 'JsonWebTokenError') {
            const message = 'JSON Web Token is invalid. Try again!';
            error = new ErrorHandler(message, 400);
        }

        // Handling expired JWT error
        if (err.name === 'TokenExpiredError') {
            const message = 'JSON Web Token has expired. Try again!';
            error = new ErrorHandler(message, 400);
        }

        res.status(error.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error'
        });
    }
};
