const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = [
  'react', 'react-dom', 'react-router', 'redux',
]

module.exports = {
  context: `${__dirname}/src`,

  entry: {
    bundle: './js/index.js',
    vendor: VENDOR_LIBS,
  },

  output: {
    path: `${__dirname}/public`,
    filename: '[name].[chunkhash].js',
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: `${__dirname}/src/`,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['babel-preset-env'],
            },
          },
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['react']
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
              localIdentName: '[path]--[name]-[local]--[hash:base64:5]',
            },
          }],
        }),
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './index.pug',
    }),
  ],
}
