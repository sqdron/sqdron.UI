'use strict';
var options = require('./env/options');
var builder = require('./webpack/webpack.build')(options);
builder();

