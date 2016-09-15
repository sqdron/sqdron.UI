'use strict';
var path = require('path');
module.exports = function(options){
    return new Configurator()
        .configure('./config/config.default')
        .configure('./config/config.dev')
        .configure('./config/config.styles')
        .configure('./config/config.minimize')
        .then(options);
}

function Configurator(func) {
    this.func = func != null ? func : function(c){ return c; };
    this.path = '.';
};

Configurator.prototype.configure =function(path){
    var currentFunc = this.func;
    this.path = path;
    return new Configurator(function(config, options){
        config = currentFunc(config, options);
        return require(path)(config, options);
    });
};
Configurator.prototype.then = function(options){
    return this.func({}, options);
}