'use strict';
module.exports = function(options) {
    const config = require('./config')(options);

    const compiler = require('webpack')(config);
    const progressPlugin = require('webpack/lib/ProgressPlugin');
    compiler.apply(new progressPlugin(function(percentage, msg) {
        // console.log((percentage * 100) + '%', msg);
    }));

    return function () {
        compiler.run(function (err, stats) {
            if(stats.hasErrors()){
                var res =stats.toJson({
                    modules :false,
                    chunks:false
                });
                console.log(res.errors);
            }
            if (stats.warnings){
                console.log(stats.warnings);
            }

            if (stats.errors){
                console.log(stats.errors);
            }

            if (err) {
                console.log(err);
            }
        });
    }
}