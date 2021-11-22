// 引入http模块
const http = require('http')

// 创建http请求
const server = http.createServer((req, res) => {
  res.end('hello http')
})

// 监听http请求
server.listen(8888, 'localhost', () => {
  console.log('启动成功');
})
