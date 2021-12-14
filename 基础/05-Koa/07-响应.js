const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  ctx.status = 404;
  ctx.body = "Hello Koa~";
});

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});
