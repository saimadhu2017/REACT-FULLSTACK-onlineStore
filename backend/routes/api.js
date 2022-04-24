module.exports = (app) => {
    
    app.route('/').get((req, res) => {
        res.end('<h1>Welcome to Backend....</h1>');
    })


}