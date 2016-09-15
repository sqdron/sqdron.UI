const webpack = require('webpack');

module.exports = function(config, options) {
    config.plugins = config.plugins.concat([
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(options.development ? "development" : "production")})
    ]);

    if (options.development)
    {
        devtool: options.devtool,
        config.entry = config.entry.concat(['webpack-hot-middleware/client'])
        config.debug = options.debug;
        config.plugins = config.plugins.concat([
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]);
    }
    return config;
}