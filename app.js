const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const server = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');
const Memcached = require('memcached');

const memcached = new Memcached(process.env.MEMCACHE_SERVERS, {retries:10,retry:10000,remove:true,failOverServers:['192.168.0.103:11211']});

server.use(bodyParser());

router.post('/', ctx => {
  ctx.body = ctx.request.body;
  console.log(ctx.body)
  memcached.add('foo', 'bar', 10);
  memcached.get('foo', (err, data) => { console.log(data) });
});

module.exports = server
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors())
  .listen(3003);