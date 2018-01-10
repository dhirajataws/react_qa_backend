import c from 'chalk';
import * as Koa from 'koa';
import * as Router from 'koa-router'
import * as koaBody from 'koa-body';
import * as cors from '@koa/cors';
export const app = new Koa();
app.use(cors());
export const router = new Router();
import './routes';

// const API_URL = 'http://localhost:3000';

export const PROTOCOL = 'http';
export const HOST = '0.0.0.0';
export const PORT = parseInt(process.env.PORT!, 10) || 8888;

// const options:cors.CorsOptions = {
//   allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
//   credentials: true,
//   methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//   origin: API_URL,
//   preflightContinue: false
// };

// router.use(cors(options));
app.use(router.routes());
//enable pre-flight
// router.options("*", cors(options));
app.use(koaBody());
app.use(router.allowedMethods());

export const server = app.listen(PORT, HOST, () => {
  // tslint:disable-next-line:no-console
  console.log(
    c.grey(`${c.green(`Listening on`)}: ${PROTOCOL}://${c.cyan(`${HOST}:${PORT}`)}`),
  );
});
