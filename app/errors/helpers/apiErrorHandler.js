const debug = require('debug')('quiz:error');

/* eslint-disable-next-line */ 
const errorHandler = (error, request, response, next) => {
    response.status(error.httpStatusCode).json({
        status: error.httpStatusCode,
        error: error.message
    });
}

module.exports = errorHandler;