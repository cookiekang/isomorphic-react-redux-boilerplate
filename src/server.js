'use strict';

import 'isomorphic-fetch';
import Koa from 'koa';
import middleware from './server/middleware';

const app = new Koa();

middleware(app);

export default app;
