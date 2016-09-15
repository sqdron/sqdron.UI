var path = require('path');
var appArgs = require('yargs')
    .options({
        'p':{
            alias: 'port',
            default: 8080,
            describe: 'Server port',
            type: 'number'
        },
        'start':{
            alias: 's',
            default: false,
            describe: 'Start server',
            type: 'boolean'
        },
        'dev':{
            alias: 'd',
            default: false,
            describe: 'development',
            type: 'boolean'
        },
        'dev-panel':{
            alias: 'dp',
            default: false,
            describe: 'dev panel',
            type: 'boolean'
        },
        'debug':{
            alias: 'db',
            default: false,
            describe: 'dev panel',
            type: 'boolean'
        },
        'minimize':{
            alias: 'm',
            default: false,
            describe: 'minimize',
            type: 'boolean'
        }
    }).argv;

var result = {
    development : appArgs.dev,
    port : appArgs.p,
    devPanel : appArgs.devPanel,
    minimize : appArgs.minimize,
    separateStylesheet : true,
    root : path.join(__dirname, '../'),
    debug :appArgs.debug,
    devtool: "source-map"
};

module.exports = result;