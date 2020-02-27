const Router = require('koa-router');

const api = new Router();
const books = require('./books');
const phones = require('./phones');

api.get('/', (ctx, next) => {
    ctx.body = 'This is api page.';
});

api.use('/books', books.routes());

api.use('/phones', phones.routes());

module.exports = api;