
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dustin-newsletter-webpack.bundle.js', 
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000,
        hot: true
    }
};