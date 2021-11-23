// 引入http模块
const http = require('http')

// 创建http请求
const server = http.createServer((req, res) => {
  // 通过URL实例能得到pathname和searchParams
  const baseURL = req.protocol + '://' + req.headers.host + '/';
  const reqUrl = new URL(req.url, baseURL);
  if (reqUrl.pathname === '/login') {
    if (req.method === 'POST') {
      req.setEncoding('utf-8');
      req.on('data', (data) => {
        console.log('%cdata: ', 'color: #58e2ba;', data);
        const { name, password } = JSON.parse(data);
        console.log(name, password);
      });
      res.end("请求结果~");
    }
  }
})

server.listen(8000, 'localhost', () => {
  console.log('server启动成功');
})