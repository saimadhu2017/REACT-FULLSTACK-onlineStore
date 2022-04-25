const Joi = require('joi');

// Note in below is have written string.base, number.base how did I found is by logging the validateRequestBody.error.details in that type
exports.schemaStoreValidation = Joi.object({
    store_name: Joi.string().min(3).max(100).required().messages({
        'string.base': 'store name must be string type',
        "string.min": "store name must be min of 3 characters",
        "string.max": "store name must be max of 100 characters",
        "any.required": "store name is required field"
    }),
    mobile_number: Joi.number().integer().min(1000000000).max(9000000000).required().messages({
        "number.base": "mobile number must be number type",
        "number.min": "mobile number length must be 10",
        "number.max": "mobile number length must be 10",
        "any.required": "mobile number is required field"
    }),
    mail_id: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'in'] } }).required().messages({
        "string.email": "mail id must be standard email format",
        "any.required": "mail id is required field"
    })
}).options({ abortEarly: false })

exports.schemaStoreValidationIncludingStoreId = Joi.object({
    store_id: Joi.number().integer().required().messages({
        "any.required": "store id is required field",
        "number.base": "store id must be a number"
    }),
    store_name: Joi.string().min(3).max(100).required().messages({
        'string.base': 'store name must be string type',
        "string.min": "store name must be min of 3 characters",
        "string.max": "store name must be max of 100 characters",
        "any.required": "store name is required field"
    }),
    mobile_number: Joi.number().integer().min(1000000000).max(9000000000).required().messages({
        "number.base": "mobile number must be number type",
        "number.min": "mobile number length must be 10",
        "number.max": "mobile number length must be 10",
        "any.required": "mobile number is required field"
    }),
    mail_id: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'in'] } }).required().messages({
        "string.email": "mail id must be standard email format",
        "any.required": "mail id is required field"
    })
})