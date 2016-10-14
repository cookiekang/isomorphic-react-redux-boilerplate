'use strict';

import config from './index';
import morgan from 'koa-morgan';
import compress from 'koa-compress';
import serve from 'koa-static';
import health from 'koa-ping';

export default function configKoa(app) {
  app.use(compress());

  app.use(health('/status'));

  app.use(serve('dist'));

  app.use((ctx, next) => {
    if (ctx.req.checkContinue) {
      ctx.res.writeContinue();
    }
    return next();
  });

  app.on('error', err => {
    console.error(err.stack);
  });

  app.use(morgan(config.logType));
}
