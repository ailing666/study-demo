// 引入http模块
const http = require('http')

// 创建http请求
const server = http.createServer((req, res) => {
  console.log('req.url', req.url);
  console.log('req.method', req.method);
  console.log('req.headers', req.headers);
  res.end('server')
})

server.listen(8000, 'localhost', () => {
  console.log('server启动成功');
})