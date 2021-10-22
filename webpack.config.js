const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: __dirname + '/public',
        filename: 'index.js',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './*.html', to: './'},
                { from: 'assets', to: 'assets' },
            ],
        }),
    ],
    devServer: {
        static: {
            directory: __dirname + '/public',
        },
        compress: true,
        port: 9000,
    },
};