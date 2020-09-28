const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    devtool: 'eval',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
      }),
    ],
  };
};
