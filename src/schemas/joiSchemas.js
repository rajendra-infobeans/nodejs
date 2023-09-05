const Joi = require('joi');

const schemas = {
    registerSchema: Joi.object().keys({
        email: Joi.string().email().trim().required(),
        password: Joi.string().trim().min(5).required(),
        firstname: Joi.string().trim().min(2).required(),
        lastname: Joi.string().trim().min(2).required()
    })
};

module.exports = schemas;
