const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
  },
  module: {
    rules: [

      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // 调整打包后的css资源路径
            options: {
              publicPath: '../',
            },
          },
          'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // 调整打包后的css资源路径
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // 这个表示会在输出文件夹dist下创建一个image文件夹，所有的文件名字是 “原名字+原件扩展名”
              name: 'image/[name].[ext]',
              // 关闭es模块语法
              esModule: false,
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
    }),
  ],
};
