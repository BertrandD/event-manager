var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './assets/',
    './scss/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: "http://localhost:8852/dist/",
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          "presets": ["es2015", "react", "react-hmre", 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      },
      {
        test: /\.css$/,
        loaders: ["style", "css?sourceMap"]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.jpg$/,    loader: "url-loader?limit=10000&minetype=image/jpg" }
    ],
    sassLoader: {
      includePaths: [path.resolve(__dirname, "./scss")]
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
