const connectDB = require('./connectDB');
const { Request } = require('tedious');
const { responseConstants } = require('../util/helpers');

exports.executeAPI = (sql, onDone, onError, res) => {

    connectDB((connection) => {

        let isErrorEncountered = false;

        const request = new Request(sql, (err) => {
            if (err) {
                console.error('ERROR AFTER EXECUTING SQL AND ERROR is.. ', err);
                const response = {
                    status: responseConstants.failure,
                    error: err
                };
                onError(response, res);
                isErrorEncountered = true;
            }
            console.log('API is Hit.');
            connection.close();
        });//here sql will execute and each row it will collect will be gone to request.on 'row' and then after recived all the data API is hit comes at last

        const final_rows = [];//this is array of objects means array of rows

        //the below request.on will run based on number of rows fetched from the sql statement
        //if the number of rows are 2 then below function will run 2 times each run consist of a single row which is array of columns
        request.on('row', (columns_of_row) => {
            const item = {}
            columns_of_row.map((column_of_row) => {
                if (column_of_row) {
                    item[column_of_row.metadata.colName] = column_of_row.value;
                }
            })
            final_rows.push(item)
        });

        request.on('requestCompleted', () => {
            if (isErrorEncountered) {
                console.log('REQUESTD completed WITH ERROR...');
                return;
            }
            console.log('REQUESTD completed ...');
            const response = {
                status: responseConstants.success,
                data: final_rows
            }

            onDone(response, res)
        });

        if (connection) {
            // console.log('First this will execute..');
            connection.execSql(request);
        }

    }, res);

}