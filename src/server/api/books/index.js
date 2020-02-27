const Router = require('koa-router');

const books = new Router();
const booksController = require('./books.controller');

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

books.get('/', booksController.list);

books.post('/', booksController.create);

books.delete('/', booksController.delete);

books.put('/', booksController.replace);

books.patch('/', booksController.update);

module.exports = books;