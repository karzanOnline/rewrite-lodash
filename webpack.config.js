/**
 * Created by apple on 2016/11/14.
 */

let webpack = require('webpack');
let path = require('path');
const entries_key = Object.keys(require('./entry.config'));

let node_modules = path.resolve(__dirname, 'node_modules');
let publicPath = 'http://localhost:9090/';
// var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
const ROOT_PATH = path.resolve(__dirname);

let devConfig = {
    entry: require(path.resolve(__dirname, 'entry.config')),
    output: {
        publicPath,
        path: './dist/',
        filename: '[name].js',
        chunkFilename: 'chunk/[chunkhash:8].chunk.js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
            },      /* es6 to es5*/
        ]
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     filename: 'common.js',
        //     minChunks: 2,
        //     chunks: entries_key,
        // }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ]
};
module.exports = devConfig;
