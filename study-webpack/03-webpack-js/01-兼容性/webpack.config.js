const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        // 匹配js文件
        test: /\.m?js$/i,
        // 排除不需要打包的目录
        exclude: /node_modules/,
        use: {
          // 指定babel-loader
          loader: 'babel-loader',
          options: {
            presets: [
              [
                // 所有js最新的转换规则
                '@babel/preset-env',
                {
                  // 按需加载
                  useBuiltIns: 'usage',
                  // core-js 的版本
                  corejs: 3,
                  // 默认值
                  targets: 'defaults',
                  // 可以手动指定兼容浏览器的版本
                  // targets: {
                  //   chrome: '58',
                  //   ie: '9',
                  //   firefox: '60',
                  //   safari: '10',
                  //   edge: '17'
                  // }
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
}
