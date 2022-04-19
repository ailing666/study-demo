
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 引入插件
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css'
    }),
    // 实例化插件
    new StylelintPlugin({
      // 匹配需要进行格式校验的文件
      files: ['src/css/*.{css,less,sass,scss}'],
      // 尽可能修复错误
      fix: true
    })
  ]
} 