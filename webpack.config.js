const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const config = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions:["*", ".jsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './build',
        host: 'localhost',
        port: 4000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin()
    ]
};

module.exports = (env, argv) => {
    console.log('env :', env);
    console.log('argv:', argv);

    if ( argv.mode == 'development' ) {
        //config.devtool = 'source-map';
    }

    if ( argv.mode == 'production' ) {
        //config.devtool = '';
    }

    return config;
};