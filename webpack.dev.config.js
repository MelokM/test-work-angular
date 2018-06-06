module.exports = {
  mode: "development",
  entry: [
    './src/app.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'}
    ]
  },
  devServer: {
    contentBase: './public',
    hot: true
  }
};