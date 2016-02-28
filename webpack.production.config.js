var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    app: path.resolve(__dirname, 'app/js/index.js'),

    // Since react is installed as a node module, node_modules/react,
    // we can point to it directly, just like require('react');
    vendors: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel'
    },
    {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new ExtractTextPlugin("style.css")
  ]
};

module.exports = config;
