const { executeAPI } = require('../config/ExecuteFunction');
const { responseConstants, getValidationErrors } = require('../util/helpers');
const { onDone, onError } = require('../util/responseMethods');
const { schemaStoreValidation,schemaStoreValidationIncludingStoreId } = require('../util/validations');

// 1. Get Stores
exports.getStores = (req, res) => {
    const sql = 'SELECT * FROM [store].[fn_getStores]()'
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
    const sql = `EXEC [store].[sp_createStore] @store_name='${store_name}',@mobile_number='${mobile_number}',@mail_id='${mail_id}'`
    executeAPI(sql, onDone, onError, res)
}

// 2. Updating Store
exports.updateStore = (req, res) => {
    const validateRequestBody = schemaStoreValidationIncludingStoreId.validate(req.body);
    if (Boolean(validateRequestBody.error)) {
        // validateRequestBody.error.details is the array which contains objects and each objects we have a error message
        return (
            res.status(responseConstants.badRequest).json({
                status: 0,
                error: getValidationErrors(validateRequestBody.error.details)
            })
        );
    }
    const { store_id, store_name, mobile_number, mail_id } = req.body;
    const sql = `EXEC [store].[sp_updateStore] @store_id='${store_id}',@store_name='${store_name}',@mobile_number='${mobile_number}',@mail_id='${mail_id}'`
    executeAPI(sql, onDone, onError, res)
}

// 2. delete Store
exports.deleteStore = (req, res) => {
    const id=Number(req.query.id)
    if (id==NaN || id==0) {
        return (
            res.status(responseConstants.badRequest).json({
                status: 0,
                error: 'Cannot Delete the store'
            })
        );
    }
    const sql = `EXEC [store].[sp_deleteStore] @store_id='${req.query.id}'`
    executeAPI(sql, onDone, onError, res)
}