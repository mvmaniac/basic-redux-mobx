import * as path from 'path';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {Configuration} from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

const baseConfig: Configuration = {
  mode: process.env.NODE_ENV ? 'production' : 'development',
  devtool: process.env.NODE_ENV ? 'hidden-source-map' : 'eval-cheap-source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts']
  },
  entry: {
    app: './src/client'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean)
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin.CleanWebpackPlugin(),
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
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    publicPath: '/',
    port: 8080,
    hot: true
  }
};

const config = !isDevelopment
  ? {...baseConfig, target: ['web', 'es5']}
  : baseConfig;

export default config;
