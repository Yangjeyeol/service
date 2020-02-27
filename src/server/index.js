//const Koa = require('koa');
//const Router = require('koa-router');
import Koa from 'koa';
import Router from 'koa-router';

/* [2] router */
const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'This is root page.';
});

router.get('/about', (ctx, next) => {
    ctx.body = 'This is about page.';
});

router.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params;
    ctx.body = 'This is about page.<br/>My name is ' + name;
});

router.get('/post', (ctx, next) => {
    const { id } = ctx.request.query;
    if ( id ) {
        ctx.body = 'This is post page.<br/>My ID is ' + id;
    } else {
        ctx.body = 'This is post page.<br/>No ID.';
    }
});

const api = require('./api');
router.use('/api', api.routes());

//app.use(router.routes())
//app.use(router.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());

/* [1] default
app.use(async (ctx, next) => {
    console.log('async module loaded..');
    const started = new Date();
    await next().then(() => {
        console.log('async module inner load time:' + (new Date() - started) + 'ms');
    });;
    console.log('async module load time:' + (new Date() - started) + 'ms');
});

app.use((ctx, next) => {
    console.log('module 1 loaded.');
    const started = new Date();
    next().then(() => {
        console.log('module 1 load time:' + (new Date() - started) + 'ms');
    });
});

app.use((ctx, next) => {
    console.log('module 2 loaded.');
    const started = new Date();
    next().then(() => {
        console.log('module 2 load time:' + (new Date() - started) + 'ms');
    });
});

app.use((ctx, next) => {
    ctx.body = 'Hello Koa';
    console.log('body loaded.');
    const started = new Date();
    next().then(() => {
        console.log('body load time:' + (new Date() - started) + 'ms');
    });
});
*/

require('dotenv').config();

const port = process.env.PORT||4000;

app.listen(port, () => {
    console.log('Koa server is listening to port ' + port);
});