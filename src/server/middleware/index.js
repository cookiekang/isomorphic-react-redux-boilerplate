import packageJson from '../../../package.json';
import config from '../config';
import morgan from 'koa-morgan';
import compress from 'koa-compress';
import convert from 'koa-convert';
import serve from 'koa-static';
import health from 'koa-ping';
import redux from './koa-redux';
import { loadOnServer } from 'redux-connect';
import cacheControl from 'koa-cache-control';
import reactRender from './koa-react-render';
import reactRouter from './koa-react-router';
import webpackIsoTools from './koa-webpack-iso-tools';
import i18next from './koa-i18next';
import nkr from './koa-nkr';

export default function middleware(app) {
  app.use(compress());

  app.use(convert(health(`/${packageJson.name}/health`)));

  app.use(serve('dist', {
    maxage: 1000 * 60 * 60 * 24 * 365
  }));

  app.use(convert(cacheControl({
    maxAge: 60 * 2
  })));

  app.use(morgan(config.logType));

  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {

      switch (err.message) {
        case 'Unknown route':
          ctx.status = 404;
          break;
        default:
          ctx.status = 500;
          console.error(err.stack);
      }

      ctx.body = err.message;
    }
  });

  app.use(webpackIsoTools());

  app.use(redux());

  app.use(reactRouter());

  app.use(async (ctx, next) => {
    const { params } = ctx.renderProps;

    ctx.locale = params.locale || 'en-US';

    await next();
  });

  app.use(i18next());

  app.use(async (ctx, next) => {
    await loadOnServer({ ...ctx.renderProps, store: ctx.store });
    await next();
  });

  app.use(nkr());
  app.use(reactRender());
}
