const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();


app.use(bodyParser());

app.use((ctx, next) => {
  console.log(ctx.request.body);
  ctx.response.body = ctx.request.body;
});

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});
