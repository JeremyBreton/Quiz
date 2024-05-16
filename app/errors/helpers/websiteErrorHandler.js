const debug = require('debug')('quiz:error');

/* eslint-disable-next-line */ 
const errorHandler = (error, request, response, next) => {
    response.status(error.httpStatusCode).render('error', {error});
}

module.exports = errorHandler;