const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset',
        // 如果文件小于 8kb，则使用 asset/inline 类型
        // 如果文件大于 8kb，则使用 asset/resource 类型
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 限制于 8kb
          },
        },
        generator: {
          filename: 'image/[name][ext]',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        // 如果文件小于 8kb，则使用 asset/inline 类型
        // 如果文件大于 8kb，则使用 asset/resource 类型
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: 'fonts/[name][ext]',
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
    // 直接将 src 下，不需要特殊处理的文件，直接复制到输出目录中
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, './src/public'), to: 'public' },
      ],
    }),
  ],
};
