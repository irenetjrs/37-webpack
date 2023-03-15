const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   mode: 'development',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js'
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: './src/index.html'
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
         filename: '[name].[hash].css'
      }),
   ],
   module:{
      rules: [
         {
            test: /\.s[ac]ss$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
         },
      ]
   },
   devServer:{
      watchFiles: path.resolve(__dirname, 'src'),
      port: 3000
   },
}
