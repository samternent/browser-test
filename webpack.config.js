var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    javascript: "./src/app.js",
    html: "./index.html"
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  resolve: {
      extensions: ['', '.js', '.scss'],
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
          },
          {
            test: /\.scss$/,
            loader: 'style!css!sass'
          },
          {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
          },
        ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
