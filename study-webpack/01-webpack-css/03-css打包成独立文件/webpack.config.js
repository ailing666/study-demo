const path = require('path');
// 引入 MiniCssExtractPlugin 插件
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
          // 使用 MiniCssExtractPlugin.loader 代替 style-loader,将 CSS 打包到独立的文件中
          MiniCssExtractPlugin.loader,
          'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          // 使用 MiniCssExtractPlugin.loader 代替 style-loader,将 CSS 打包到独立的文件中
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    // 实例化插件
    new MiniCssExtractPlugin({
      // 指定输出的位置和文件名 [name]:使用默认名称
      filename: 'style/[name].css',
    }),
  ],
};
