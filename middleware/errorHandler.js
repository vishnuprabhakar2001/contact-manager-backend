const { constants } = require("../constants.js")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode?res.statusCode:500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
         res.json({
            title: "Validation Failed",
            message: err.message,
        
         })    
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not Found",
                 message: err.message,
                  stackTrace: err.stack});   

        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized",
                 message: err.message,
                  stackTrace: err.stack}) 

        case constants.FORBIDDEN:
            res.json({ title: "Forbidden",
                 message: err.message,
                  stackTrace: err.stack}) 

        case constants.SERVER_ERROR:
            res.json({ title: "Server Error",
                 message: err.message,
                  stackTrace: err.stack})           
        default:
            console.log("No Error, All Good !")
            break;
    }

};

module.exports = errorHandler;


// 

// asyncHandler catches the rejected Promise that contains the Error object.
// Error represents failure. asyncHandler detects it. Express routes it. errorHandler responds.
// The Error class only creates and throws an error object. The forwarding to Express happens when asyncHandler 
// catches the rejected promise and calls next(error), which then triggers the global error-handling middleware.
// An async function always returns a Promise. So when you throw inside an async function: throw new Error("Failure");
// JavaScript automatically converts this into: return Promise.reject(new Error("Failure"));
// The rejection value is the Error object

// Complete flow in one line
// new Error() creates an Error object → throw rejects the async function’s Promise with that same object → asyncHandler catches the rejected Promise → calls next(error) with the same object → Express passes that same object to errorHandler(err, req, res, next)