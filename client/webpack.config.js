const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rulesForStyles = {
  test: /\.css$/,
  use: [
    "style-loader",
    "css-loader",
  ],
};

const rulesForJavascript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-react']
      ]
    }
  },
};

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: "/",
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },  
  module: {
    rules: [
      rulesForJavascript,
      rulesForStyles
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename:'index.html'
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
  },
};
