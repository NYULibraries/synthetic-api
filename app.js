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
  const testedCase = ctx.body.case
  const testedUrl = ctx.body.app
  memcached.add(testedUrl, testedCase, 1000, (err) => {} );
  memcached.get(testedUrl, (err, data) => { console.log("data is here:", data) })
});

module.exports = server
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors())
  .listen(3003)