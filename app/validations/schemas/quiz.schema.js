const Joi = require('joi');
const schemas = {
    post: Joi.object({
        // route: Joi.string().pattern(/^[a-z0-9-/]+$/).required(),
        quiz_name: Joi.string().required(),
    }).required(),
    patch: Joi.object({
        // route: Joi.string().pattern(/^[a-z0-9-/]+$/).required(),
        quiz_name: Joi.string().required(),
    }).required().min(1),
};

module.exports = schemas;