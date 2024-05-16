const debug = require('debug')('quiz:validation');

function validate(schema, dataSource){
    debug('create validation function');
    return async (request, response, next) => {
        try {
            await schema.validateAsync(request[dataSource])
            next()
        } catch(err){
            next(err);
        }
    };
}

module.exports = validate;