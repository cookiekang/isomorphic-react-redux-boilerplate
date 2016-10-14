require('babel-register')();

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
const path = require('path');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const webpackIsomorphicToolsConfig = require('./webpack/webpack-isomorphic-tools-configuration');
const config = require('./src/server/config');
const rootDir = path.resolve(__dirname);

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

if (__DEVELOPMENT__) {
  if (!require('piping')({
    hook: true,
    ignore: /(\/\.|~$|\.json|\.scss|\.sass$)/i
  })) {
    return;
  }
}

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
  .development(__DEVELOPMENT__)
  .server(rootDir, function () {
    require('./src/server').listen(config.port, config.ip, () => {
      console.log(`Koa server listening on ${config.port}, in ${config.env} mode`);
    });
  });
