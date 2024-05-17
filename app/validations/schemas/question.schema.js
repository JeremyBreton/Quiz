const Joi = require('joi');

const schemas = {
    post: Joi.object({
        question_text: Joi.string().required(),
        quiz_id: Joi.number().integer().required(),
        theme_id: Joi.number().integer().required(),
    }).required(),
    patch: Joi.object({
        question_text: Joi.string().required(),
        quiz_id: Joi.number().integer().required(),
        theme_id: Joi.number().integer().required(),
    }).required().min(1),
} 

module.exports = schemas;