
const path = require('path')
module.exports = {
  mode: 'production',
  // 配置入口文件
  entry: "./src/index.js",
  // 指定输出位置
  output: {
    // 必须是绝对路径
    path: path.resolve(__dirname, 'dist'),
    // 打包生成的js名称
    filename: 'build.js',
  },
  module: {
    // 指定多个配置规则
    rules: [
      {
        // 正则表达式：匹配以 .css 结尾的文件
        test: /\.css$/i,
        // use 中 loader 的加载顺序：先下后上，先右后左，也就是所先执行 css-loader 再执行 style-loader
        use: ['style-loader', 'css-loader']
      }
    ]
  }
} 