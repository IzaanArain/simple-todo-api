const { constants } = require("./constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(statusCode)
  // res.json({title:"Not Found",message: err.message,stackTrace:err.stack})
  // res.json({title:"validation Failed",message: err.message,stackTrace:err.stack})
  // res.status(statusCode)
  // res.json({
  //     message:err.message,
  //     stack:err.stack
  // })
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbbiden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      console.log("No Errors,All good!");
      break;
  }
};

module.exports = errorHandler;
