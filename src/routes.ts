import { app, router } from './server';
import { cow } from '../data/carOfWeek';
import { makedata } from '../data/makeList';
import { modeldata } from '../data/modelList';

app.use(async (ctx, next) => {
  // Do setup shit maybe?

  await next();
});

router.get('/carofweek', (ctx) => {
  ctx.body = cow;
});

router.get('/make', (ctx) => {
  ctx.body = makedata;
});

router.get('/model', (ctx) => {
  ctx.body = modeldata;
});

