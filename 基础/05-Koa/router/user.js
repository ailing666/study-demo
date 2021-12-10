const Router = require('koa-router');

const router = new Router({prefix: "/users"});

router.get('/', (ctx, next) => {
  ctx.response.body = "get request~";
});

router.post('/', (ctx, next) => {
  ctx.response.body = "post request~";
});


module.exports = router;
