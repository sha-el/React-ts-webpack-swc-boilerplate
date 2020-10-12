/* eslint-disable */

const { resolve } = require('path');
// const {
//     CheckerPlugin
// } = require('awesome-typescript-loader');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const CONTEXT = resolve(__dirname, '../../src/');

module.exports = {
  resolve: {
    extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': CONTEXT,
      '@components': resolve(CONTEXT, 'app/components'),
      '@components/*': resolve(CONTEXT, 'app/components/*'),
    },
  },
  context: CONTEXT,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['swc-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        MORPHEUS_URL: JSON.stringify(process.env.MORPHEUS_URL || 'http://localhost:3002'),
        DOZER_URL: JSON.stringify(process.env.DOZER_URL || 'http://localhost:3003'),
        AUTH_HOST: JSON.stringify(process.env.AUTH_URL || 'http://localhost:3000'),
        APP_NAME: JSON.stringify(process.env.APP_NAME || 'Inventory'),
        APP_ID: JSON.stringify(process.env.APP_ID || '5f57ab4192e6003f9973991f'),
      },
    }),
    new ForkTsCheckerWebpackPlugin({ typescript: {configFile: '../tsconfig.json' }}),
  ],
  performance: {
    hints: false,
  },
};
