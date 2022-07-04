const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { name } = require("./package.json");
const config = require("./webpack.config");


module.exports = {
    ...config,

    mode: "development",
    devtool: "cheap-module-source-map",

    optimization: {
        minimize: false,
    },

    devServer: {
        open: true,
        hot: true,
        host: "localhost",
        port: 9000
    },

    module: {
        rules: [
            {
                test: /\.(j|t)s$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sc|sa|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
            chunks: [name, "demo"],
            template: path.resolve(__dirname, "src/demo/index.html"),
        })
    ]
};