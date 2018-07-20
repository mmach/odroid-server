'use strict';

const webpack = require('webpack');
//         path = require('path');//
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

//const extractLESS = new ExtractTextPlugin('./public/two.css');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/web/index.html',
    filename: 'index.html',
    inject: 'body'
});


const config = [{

    entry: {
        "app": ['./src/web/app.jsx',
            './src/web/assets/vendor/bootstrap/bootstrap.min.css',
            './src/web/assets/vendor/icon-awesome/css/font-awesome.min.css',
            './src/web/assets//vendor/icon-hs/style.css',
            './src/web/assets/vendor/dzsparallaxer/dzsparallaxer.css',
            './src/web/assets/vendor/dzsparallaxer/dzsscroller/scroller.css',
            './src/web/assets/vendor/dzsparallaxer/advancedscroller/plugin.css',
            './src/web/assets/vendor/animate.css',
            './src/web/assets/vendor/hs-megamenu/src/hs.megamenu.css',
            './src/web/assets/vendor/hamburgers/hamburgers.min.css',
            './src/web/assets/css/unify.css',
            './src/web/assets/css/custom.css'
            /*
                ,
                './src/web/assets/vendor/tether.min.js'
                ,
                './src/web/assets/vendor/bootstrap/bootstrap.min.js'
                ,
                './src/web/assets/vendor/hs-megamenu/src/hs.megamenu.js'
                ,
                './src/web/assets/vendor/dzsparallaxer/dzsparallaxer.js'
                ,
                './src/web/assets/vendor/dzsparallaxer/dzsscroller/scroller.js'
                ,
                './src/web/assets/vendor/dzsparallaxer/advancedscroller/plugin.js'
                ,
                './src/web/assets/vendor/typedjs/typed.min.js'
              
                ,
                './src/web/assets/js/hs.core.js'
                ,
                './src/web/assets/js/components/hs.header.js'
                ,
                './src/web/assets/js/helpers/hs.hamburgers.js'
                ,
                './src/web/assets/js/components/hs.go-to.js'*/
        ]
        //,

    },

    output: {
        path: __dirname + '/web',

        filename: '[name].bundle.js',

        publicPath: '/'
    },

    "target": "web",

    devServer: {
        historyApiFallback: true,

    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },

            {
                test: /\.jsx$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },

            { // sass / scss loader for webpack
                test: /\.(css)$/,

                loader: ExtractTextPlugin.extract(['css-loader'])
            },

            {
                test: /\.(png|jpg|gif|cur|woff|eot|ttf|svg|dtd|woff2)$/,

                use: [{
                    loader: 'url-loader'
                }]
            }

        ],



    },

    plugins: [HtmlWebpackPluginConfig,

        new ExtractTextPlugin({ // define where to save the file
            filename: 'bundle.css'

        }),
        new webpack.ProvidePlugin({
            $: "jquery",

            jQuery: "jquery",

            "window.jQuery": "jquery"
        }),


    ]

}];

module.exports = config;