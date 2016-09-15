'use strict';
var webpack = require('webpack');

module.exports = function(options) {
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    var config = require('./config')(options);
    var compiler = webpack(config)
    return function (app) {
        app.use(webpackDevMiddleware(compiler, {noInfo: true, quiet: false, publicPath: config.output.publicPath}));
        app.use(webpackHotMiddleware(compiler));
    }
}

