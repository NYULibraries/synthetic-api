const Koa = require('koa');
const cors = require('@koa/cors')
const Router = require('koa-router');
const server = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = "Hello World!";
});

server
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors())
  .listen(3003);