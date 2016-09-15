module.exports = function(configurator){
    var app = require('express')();
    const path = require('path');

    configurator(app);
    return function (options){
        app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, '../dist/index.html'));
        });
        app.listen(options.port, function (error) {
            if (error) {
                console.error(error)
            } else {
                console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", options.port, options.port)
            }
        });
    };
}



