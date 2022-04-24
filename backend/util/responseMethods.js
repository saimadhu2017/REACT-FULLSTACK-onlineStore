const { responseConstants } = require('./helpers');

exports.onDone = (response, res) => {
    res.status(responseConstants.ok).json(response);
}

exports.onError = (response, res) => {
    res.status(responseConstants.serverError).json(response);
}