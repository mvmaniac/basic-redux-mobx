import * as path from 'path';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
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
    new ForkTsCheckerWebpackPlugin()
  ],

  output: {
    publicPath: '/',
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  }
};

// eslint-disable-next-line import/no-mutable-exports
let config;

if (!isDevelopment) {
  config = { ...baseConfig, target: ['web', 'es5'] };
} else {
  baseConfig.plugins?.push(new ReactRefreshWebpackPlugin());

  config = {
    ...baseConfig,
    devServer: {
      static: {
        directory: path.join(__dirname, './src')
      },
      port: 8080,
      hot: true,
      liveReload: false,
      client: {
        overlay: {
          errors: true,
          warnings: false
        }
      },
      devMiddleware: {
        publicPath: '/'
      }
    }
  };
}

export default config;
