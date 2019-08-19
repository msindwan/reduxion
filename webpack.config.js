/**
 * Webpack Dev Config
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-12-14
 *
 * @Description : Webpack configuration for dev builds.
 **/

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'example', 'src', 'javascript', 'app.jsx'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ],
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.scss']
    },
    output: {
      path: path.join(__dirname, 'example', 'dist'),
      publicPath: '/',
      filename: 'app.js'
    },
    devServer: {
      contentBase: './example'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'app.css'
      }),
      new WriteFilePlugin()
    ]
  };
