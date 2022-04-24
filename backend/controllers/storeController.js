const { executeAPI } = require('../config/ExecuteFunction');
const {onDone,onError} = require('../util/responseMethods');

//1. Get Stores
exports.getStores = (req, res) => {
    const sql = 'EXEC [store].[sp_getStores]'
    executeAPI(sql, onDone, onError, res)
}