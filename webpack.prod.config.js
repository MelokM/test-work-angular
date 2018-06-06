const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  plugins: [
    new UglifyJsPlugin()
  ],
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'}
    ]
  }
};