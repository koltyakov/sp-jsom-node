const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const version = 'spo'; // 'spo', '2016', '2013'

module.exports = {
  mode: 'production',
  cache: false,
  entry: './src/index.ts',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /rx\.lite\.aggregates\.js/,
        use: 'imports-loader?define=>false'
      },
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        extractComments: 'all'
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CopyWebpackPlugin([{
      from: `./node_modules/sp-jsom-node/jsom/${version}`,
      to: `./jsom/${version}`
    }])
  ]
};