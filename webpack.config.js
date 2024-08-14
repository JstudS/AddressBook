const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';


module.exports = {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: 'asset/[name][ext]'
    },
    
    devServer: {
        open: true,
      },

    devtool: devMode ? 'inline-source-map' : undefined,

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'
            )}),
    ],
    
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
    },

}