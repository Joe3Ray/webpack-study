const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    vendors: './src/vendors.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendors', 'manifest'],
      filename: '[name].js',
      minChunks: 2
    }),
    new BundleAnalyzerPlugin()
  ]
}
