// 引入http模块
const http = require('http')

// 创建http请求
const server = http.createServer((req, res) => {
  res.end('hello http')
})

// 启动服务器，监听端口号和主机
server.listen(8888, 'localhost', () => {
  console.log('启动成功');
})
