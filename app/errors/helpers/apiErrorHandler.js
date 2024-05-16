const debug = require('debug')('quiz:error');

/* eslint-disable-next-line */ 
const errorHandler = (error, request, response, next) => {
    const statusCode = error.httpStatusCode || 500; // Utilisez 500 par défaut si httpStatusCode est indéfini

    response.status(statusCode).json({
        status: statusCode,
        error: error.message
    });
}

module.exports = errorHandler;

