import c from 'chalk';
import * as Koa from 'koa';
import * as Router from 'koa-router'
import * as koaBody from 'koa-body';
import * as cors from '@koa/cors';
export const app = new Koa();
app.use(cors());
export const router = new Router();
import './routes';

export const PROTOCOL = 'http';
export const HOST = '0.0.0.0';
export const PORT = parseInt(process.env.PORT!, 10) || 8888;

app.use(router.routes());
app.use(koaBody());
app.use(router.allowedMethods());

export const server = app.listen(PORT, HOST, () => {
  // tslint:disable-next-line:no-console
  console.log(
    c.grey(`${c.green(`Listening on`)}: ${PROTOCOL}://${c.cyan(`${HOST}:${PORT}`)}`),
  );
});
