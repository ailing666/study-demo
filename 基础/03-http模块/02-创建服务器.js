// 引入http模块
const http = require('http')

// 创建http请求
const server1 = http.createServer((req, res) => {
  res.end('server1')
})

server1.listen(8000, 'localhost', () => {
  console.log('server1启动成功');
})

const server2 = new http.Server((req, res) => {
  res.end('server2')
})
server2.listen(8001, 'localhost', () => {
  console.log('server2启动成功');
})