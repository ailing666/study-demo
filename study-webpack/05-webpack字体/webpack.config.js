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
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
    }),
    // 用于生成 index.html
    new HtmlWebpackPlugin({
      // 指定打包后的文件名称
      filename: 'index.html',
      // 用来指定，生成 HTML 的模板
      template: './src/index.html',
      // 指定 HTML 中使用的变量
      title: '关于我们',
      // html压缩规则
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
};
