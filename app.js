const Koa = require('koa');
const cors = require('@koa/cors')
const Router = require('koa-router');
const server = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');

server.use(bodyParser())

router.post('/', ctx => {
  ctx.body = ctx.request.body;
});

server
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors())
  .listen(3003);