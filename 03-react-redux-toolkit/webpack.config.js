const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  resolve: {
    extensions: ['.jsx', '.js']
  },
  entry: {
    app: './src/client'
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: ['defaults']
                    },
                    useBuiltIns: 'usage',
                    corejs: {version: 3, proposals: true}
                  }
                ],
                '@babel/preset-react'
              ],
              plugins: ['react-refresh/babel']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['.jsx', '.js']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
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
