'use strict';
module.exports = function(config, options){
    if(options.minimize) {
        const webpack = require('webpack');
        config.plugins = config.plugins.concat([
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                }
            }),
            new webpack.optimize.DedupePlugin()
        ]);
    }
    return config;
};