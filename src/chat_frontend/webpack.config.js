const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  mode: 'development',
  entry: './assets/index.js',
  output: {
    filename: './frontend/js/main.js',
    path: path.resolve(__dirname, 'static'),
  },
  devServer: {
    static: './frontend/js',
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'assets/index.dev.html'),
      filename: 'index.html'
    })
  ]
};

