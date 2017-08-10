const webpack = require('webpack');
const path = require('path');
const jQuery = require('jquery');
const UglifyESPlugin = require('uglify-es-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    'app.min': './src/typescript/index.ts',
    'frameworks.min': './frameworks/frameworks-main.js'
  },
  output: {
    path: path.resolve(__dirname, './js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts','.tsx', '.js'],
    modules: ['node_modules']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new UglifyESPlugin({
      minimize: true,
    })
  ],
  module: {
    loaders: [
      
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: [/node_modules/, /frameworks/],
        query: {
          declaration: false
        }
      }
    ],
    rules: [
      {
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader" 
      }
    ]
  }
};