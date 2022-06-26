const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { version, name, homepage, author } = require("./package.json");

const banner =
`${name} v${version}
${homepage}

This library was developed specifically for https://swiftbook.ru/.
Author ${author.replace(/ *<[^)]*> */g, " ")}.`;

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: "./src/lib/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "build"),
        library: name,
        libraryTarget: "umd",
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: { inline: false }
                }
            })
        ]
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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new PrettierPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/index.css"
        }),
        new webpack.BannerPlugin(banner)
    ],
    resolve: {
        extensions: [ ".ts", ".js", ".json" ]
    }
};