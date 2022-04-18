
const path = require('path')
module.exports = {
  // 配置入口文件
  entry: "./src/index.js",
  // 指定输出位置
  output: {
    // 必须是绝对路径
    path: path.resolve(__dirname, 'dist'),
    // 打包生成的js名称
    filename: 'build.js',
  }
} 