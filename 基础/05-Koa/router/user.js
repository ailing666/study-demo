const Router = require('koa-router');

const router = new Router({prefix: "/users"});

router.get('/', (ctx, next) => {
  console.log(ctx.request.query);
  ctx.response.body = ctx.request.query;
});

router.post('/', (ctx, next) => {
  ctx.response.body = "post request~";
});

router.get('/:id', (ctx, next) => {
  console.log(ctx.request.params);
  ctx.response.body = ctx.request.params;
})

module.exports = router;
