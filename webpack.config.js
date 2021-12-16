const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    module: {
        rules: [
            //...
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    output: {
        hashFunction: "xxhash64",
        path: __dirname + '/public',
        filename: 'index.js',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: './*.html', to: './'},
                {from: 'assets', to: 'assets'},
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
