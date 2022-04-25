const { executeAPI } = require('../config/ExecuteFunction');
const { responseConstants, getValidationErrors } = require('../util/helpers');
const { onDone, onError } = require('../util/responseMethods');
const { schemaStoreValidation } = require('../util/validations');

// 1. Get Stores
exports.getStores = (req, res) => {
    const sql = 'EXEC [store].[sp_getStores]'
    executeAPI(sql, onDone, onError, res)
}

// 2. Create Store
exports.createStore = (req, res) => {
    const validateRequestBody = schemaStoreValidation.validate(req.body);
    if (Boolean(validateRequestBody.error)) {
        // validateRequestBody.error.details is the array which contains objects and each objects we have a error message
        return (
            res.status(responseConstants.badRequest).json({
                status: 0,
                error: getValidationErrors(validateRequestBody.error.details)
            })
        );
    }
    const { store_name, mobile_number, mail_id } = req.body;
    const sql = `EXEC [store].[sp_create_store] @store_name='${store_name}',@mobile_number='${mobile_number}',@mail_id='${mail_id}'`
    executeAPI(sql, onDone, onError, res)
}