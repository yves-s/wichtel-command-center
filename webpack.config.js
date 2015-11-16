var path = require('path'),
    webpack = require("webpack"),
    appPath = path.join(__dirname, 'app'),
    wwwPath = path.join(__dirname, 'www'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(appPath, 'app.js'),
    output: {
        path: path.join(wwwPath),
        filename: 'bundle-[hash:6].js'
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'file-loader?name=templates/[name]-[hash:6].html'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file-loader?name=images/[name].[ext]'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!raw-loader!sass-loader?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'ng-annotate-loader?add=true!babel-loader'
        }, {
            test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
            loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            pkg: pkg,
            template: path.join(appPath, 'app.html')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ]
}
