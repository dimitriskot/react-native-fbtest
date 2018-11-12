const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
const mode = isProduction ? "production" : "development";

console.log(process.env.NODE_ENV);
console.log(isProduction);

const config = {
	mode,
	entry: "./src/index.jsx",
	output: {
		path: path.resolve("dist"),
		filename: "main.[hash:6].js"
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					MiniCssExtractPlugin.loader,
					"css-loader",
					"resolve-url-loader",
					"sass-loader"
				]
			},
			{
				test: /\.woff2?$|\.ttf$|\.eot$|\.png$|\.jpe?g$/,
				use: [{
					loader: "file-loader",
					options: {
						name: "[hash:6].[ext]",
						outputPath: "assets/"
					}
				}]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin("dist", {}),
		new MiniCssExtractPlugin({
			filename: "style.[contenthash:6].css"
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: "./src/index.html",
			filename: "index.html",
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		})
	]
};

module.exports = config;