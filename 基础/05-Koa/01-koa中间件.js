const Koa = require('koa');

const app = new Koa();

// use注册中间件
app.use((ctx, next) => {
  if (ctx.request.url === '/login') {
    if (ctx.request.method === 'GET') {
      ctx.response.body = "Login Success~";
    }
  } else {
    ctx.response.body = "other request~";
  }
});

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});
