'use strict';

import 'isomorphic-fetch';
import Koa from 'koa';
import configKoa from './server/config/koa';
import reactRender from './server/reactRender';

const app = new Koa();

configKoa(app);
reactRender(app);

export default app;

