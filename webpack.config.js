/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        alias: {
            '@scripts': path.resolve(__dirname, 'src/scripts'),
        },
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Art-quiz',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [{ from: 'src/assets/', to: 'assets/' }],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.json$/i,
                loader: 'json-loader',
                type: 'javascript/auto',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
};
