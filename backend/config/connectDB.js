const database = require('./database');
const { Connection } = require('tedious');
const { responseConstants } = require('../util/helpers');

const connectDB = (callback, res) => {
    try {

        const connection = new Connection(database);

        connection.on('error', (err) => {
            console.info('ERROR IN CONNECTING WITH DB through ON method check.... ', err);
            res.status(responseConstants.serverError).send({
                status: responseConstants.failure,
                error: 'Servers are Down Try after some time'
            });
        });

        //the below is where the connection is established per operation
        connection.connect((err) => {
            if (err) {
                console.info('ERROR IN CONNECTING WITH DB.... ', err);
                res.status(responseConstants.serverError).send({
                    status: responseConstants.failure,
                    error: 'Servers are Down Try after some time'
                });
            }
            else {
                callback(connection);
            }
        });

    } catch (error) {
        console.error('connection DB catch error .... ', error);
        res.status(responseConstants.serverError).send({
            status: responseConstants.failure,
            error: 'Servers are Down Try after some time'
        });
    }
}


module.exports = connectDB;