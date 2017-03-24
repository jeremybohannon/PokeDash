const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'index.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'PokeDash',
    filename: 'index.html',
    template: 'index.html'
  })],
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loaders: ["babel-loader"],
          }
      ]
  },
};
