const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'client/src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'], //or url-loader?
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'client/src', 'index.html'),
    })
  ]
}