var options = require('./env/options');

var serverConfigurator = require('./webpack/webpack.server')(options);
var express = require('./server/server')(serverConfigurator);

express(options);