const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcPath = path.join(__dirname, '/src')
const buildPath = path.join(__dirname, '/dist')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.join(srcPath, 'index.js'),
    vendors: [ 'react', 'react-dom', 'leaflet' ]
  },
  output: {
    path: buildPath,
    filename: "[name].[hash].bundle.js",
    sourceMapFilename: '[name].[hash].bundle.map'
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
              presets: [
                'react',
                ['es2015', { "modules": false } ]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      fileName: 'vendors.[hash].js',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(srcPath, 'index.html'),
      inject: 'body'
    })
  ]
}
