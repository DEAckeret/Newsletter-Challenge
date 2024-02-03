
const path = require('path');

module.exports = {
    entry: {
        dustinNewsletter : './index.js',
        jquery: 'jquery'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-webpack.bundle.js', 
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000,
        hot: true
    }
};