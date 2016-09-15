'use strict';
module.exports = function(config, options){
    const ExtractTextPlugin = require("extract-text-webpack-plugin");
    
    config.plugins = config.plugins.concat([
        new ExtractTextPlugin("css/[name].css", {
            allChunks: true
        })
    ]);

    config.module.loaders = config.module.loaders.concat([
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'scc-loader')},
        { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') }
    ]);

    return config;
};