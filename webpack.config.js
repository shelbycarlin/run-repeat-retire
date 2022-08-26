//first we want to require in the pacakges  for path and for html-webpackplugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

//we want to allow for exposts 
module.exports = {
  //first we want to sed the mode the environment variable
  mode: process.env.NODE_ENV,
  //we want to provide an entry point to webpack
  entry: './src/client/index.js',
  //we need to give a output path for compiled files 
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource'
      },
    ]
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname)
    },
    //set up the proxy server for api
    proxy: {
      '/api': 'http://localhost:3000',
      secure: false,
    },
  }
};
