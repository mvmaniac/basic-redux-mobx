/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts']
  },
  entry: {
    app: './src/client'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // .ts or .tsx
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        enabled: true,
        files: ['./src/**/*']
      }
    }),
    new ReactRefreshWebpackPlugin()
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    publicPath: '/',
    port: 8080,
    hot: true
  }
};
