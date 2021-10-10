const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); 
const WorkboxPlugin = require('workbox-webpack-plugin');



module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({}), 
            new CssMinimizerPlugin({})
            ],
        },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    plugins: [
        /* creates a new file names index.html */
        new HtmlWebPackPlugin({
            template: './src/client/html/index.html',
            filename: './index.html',
            minify: false
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new WorkboxPlugin.GenerateSW()
    ]  
}