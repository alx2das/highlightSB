const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { name } = require("./package.json");


module.exports = {
    mode: "production",
    devtool: "source-map",

    entry: {
        [name]: "./src/lib/index.ts",
        demo: {
            import: "./src/demo/index.ts",
        }
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        library: '[name]',
        libraryTarget: "umd",
        clean: true,
        asyncChunks: true
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
                test: /\.(sc|sa|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },

    plugins: [
        new PrettierPlugin(),
        new MiniCssExtractPlugin({
            filename: "style/[name].css"
        }),
        new HtmlWebpackPlugin({
            minify: false,
            chunks: [name, "demo"],
            template: path.resolve(__dirname, "src/demo/index.html"),
        })
    ],

    resolve: {
        extensions: [ ".ts", ".js", ".json" ]
    }
};