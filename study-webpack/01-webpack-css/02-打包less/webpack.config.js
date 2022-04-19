
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
        // 正则表达式：匹配以 .less 结尾的文件
        test: /\.less$/i,
        // use 中 loader 的加载顺序：先下后上，先右后左
        use: [
          // 将 JS 中的样式，挂载到 <style> 标签中
          'style-loader',
          // css-loader 按照 CommonJS 规范，将样式文件，输出到 JS 中
          'css-loader',
          // 将 less 转成普通的 CSS
          'less-loader'
        ]
      }
    ]
  }
} 