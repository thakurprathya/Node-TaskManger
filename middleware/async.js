//function created to prevent redundant usage of try catch block for each controller / query.
const asyncWrapper = (func) => {  //passing a function as a parameter
    return async (req, res, next) => {  //returning another function
        try {
            await func(req, res, next);
        }catch(error){
            next(error);  //passing the error to next middleware
        }
    };
};

module.exports = asyncWrapper;