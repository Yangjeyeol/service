const Router = require('koa-router');

const phones = new Router();

phones.get('/', (ctx, next) => {
    ctx.body = 'This is phones page.';
});

module.exports = phones;