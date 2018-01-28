const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = [
  'react', 'react-dom', 'react-router', 'redux', 'react-redux',
]

module.exports = {
  context: `${__dirname}/src`,

  entry: {
    bundle: './js/index.jsx',
    vendor: VENDOR_LIBS,
  },

  output: {
    path: `${__dirname}/dist`,
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
        test: /\.jsx?$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: true,
                localIdentName: '[path]--[name]-[local]--[hash:base64:5]',
              },
            },
            'postcss-loader',
          ],
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

  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
