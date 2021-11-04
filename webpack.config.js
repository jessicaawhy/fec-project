const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  plugins: [
    new Dotenv()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  watch: true,
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
};
