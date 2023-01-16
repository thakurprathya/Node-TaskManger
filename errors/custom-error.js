//creating an inherited class from inbuilt class ERROR
class CustomAPIError extends Error {
    constructor(message, statusCode) {  //will be invoked every time a new instance is created
      super(message)  //it invokes constructor of parent class, as a result we have access to all the method & properties of parent
      this.statusCode = statusCode
    }
}
  
const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);   //returning a class object
}
  
module.exports = { createCustomError, CustomAPIError }