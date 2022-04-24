const database = {
    "server": process.env.DB_SERVER,
    "authentication": {
        "type": "default",
        "options": {
            "userName": process.env.DB_USER_NAME,
            "password": process.env.DB_PASSWORD
        }
    },
    "options": {
        "port": Number(process.env.DB_PORT),
        "database": process.env.DB_NAME,
        "trustServerCertificate": true
    }
}

module.exports = database;