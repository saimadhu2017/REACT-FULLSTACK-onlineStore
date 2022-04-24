const storeController = require('../controllers/storeController');

module.exports = (app) => {

    //0. Root web Page showing Html
    app.route('/').get((req, res) => {
        res.end('<h1>Welcome to Backend....</h1>');
    })

    //1. Get Stores
    app.route('/stores').get(storeController.getStores)
}