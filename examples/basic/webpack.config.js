const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const version = 'spo'; // 'spo', '2016', '2013'

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /rx\.lite\.aggregates\.js/,
      use: 'imports-loader?define=>false'
    }, {
      test: /\.ts?$/,
      loader: 'awesome-typescript-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CopyWebpackPlugin([{
      from: `./node_modules/sp-jsom-node/jsom/${version}`,
      to: `./jsom/${version}`
    }]),
    new UglifyJSPlugin({
      parallel: true,
      uglifyOptions: {
        mangle: false
      }
    })
  ]
};