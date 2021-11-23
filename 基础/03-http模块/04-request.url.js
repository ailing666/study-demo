// 引入http模块
const http = require('http')
const url = require('url')
const qs = require('querystring')

// 创建http请求
const server = http.createServer((req, res) => {
  // 直接打印  /login?name=loveZero&password=666
  console.log('req.url', req.url);

  // 通过url.parse可以得到pathname和query
  console.log('url.parse', url.parse(req.url));
  const { query } = url.parse(req.url);
  if (url.parse(req.url).pathname === '/login') {
    const { name, password } = qs.parse(query);
    console.log(name, password);
  }

  // 通过URL实例能得到pathname和searchParams
  const baseURL = req.protocol + '://' + req.headers.host + '/';
  const reqUrl = new URL(req.url, baseURL);
  console.log('reqUrl', reqUrl);
  const { pathname, searchParams } = reqUrl
  if (pathname === '/login') {
    console.log(searchParams.get('name'), searchParams.get('password'));
    res.end("请求结果~");
  }
})

server.listen(8000, 'localhost', () => {
  console.log('server启动成功');
})