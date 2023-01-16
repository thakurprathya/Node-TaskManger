//express comes with a built-in error handler that takes care of any errors that might be encountered in the app. The default
//error handling middleware function is added at the end of middleware function stack.
//if we pass the error to the next() and we do not handle that error that error will be handled by built-in error handler.
//refer errors docs on express site by searching errors

//writing error handler
const { CustomAPIError } = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) =>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({ message: err.message })
    }
    res.status(err.status).json({ message: 'Something went wrong, please try again' });
}

module.exports = errorHandlerMiddleware;