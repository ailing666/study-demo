const Koa = require('koa');
const multer = require('koa-multer');

const app = new Koa();

const upload = multer();

app.use(upload.any());

app.use((ctx, next) => {
  console.log(ctx.req.body);
  ctx.response.body = ctx.req.body;
});

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});
