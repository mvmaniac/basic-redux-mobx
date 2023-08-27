const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

let config = {
  mode: process.env.NODE_ENV || 'development',
  devtool: process.env.NODE_ENV ? 'hidden-source-map' : 'eval-cheap-source-map',

  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './src/client',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['.jsx', '.js'],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  devServer: {
    publicPath: '/',
    port: 8080,
    hot: true,
  },
};

if (!isDevelopment) {
  config = { ...config, target: ['web', 'es5'] };
} else {
  config.plugins.push(new ReactRefreshWebpackPlugin());

  config = {
    ...config,
    devServer: {
      static: {
        directory: path.join(__dirname, './src'),
      },
      port: 8080,
      hot: true,
      liveReload: false,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      devMiddleware: {
        publicPath: '/',
      },
    },
  };
}

module.exports = config;
