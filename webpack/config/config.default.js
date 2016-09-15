'use strict';
var path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function(config, options){
    return {
        entry : ['./src/index'],
        output : {
            path: path.join(options.root, 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        module :{
            loaders: [
                { test: /\.ts[x]?$/, loader: 'react-hot!ts-loader', exclude: /node_modules/ },
                { test: /\.html$/, loader: 'raw' },
                {
                    test: /\.(woff|woff2|ttf|eot)$/,
                    loader: 'file?name=fonts/[name].[ext]'
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader:'file?name=i/[name].[ext]'
                }
            ]
        },
        plugins : [
            new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
            new htmlWebpackPlugin({ template: './src/index.html', inject: 'root'}),
            new webpack.ProvidePlugin({
                'React':'react',
                'ReactDOM':'react-dom'
            })
        ],
        resolve:{
            extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx'],
            modulesDirectories: ['node_modules'],
            alias: {
                _fonts: path.join(options.root, 'src', 'static', 'fonts'),
                _images: path.join(options.root, 'src', 'static', 'images'),
                _stylesheets: path.join(options.root, 'src', 'styles')
            }
        }
    }
};
