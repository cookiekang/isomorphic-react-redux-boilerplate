// This config file is not using ES2015 import syntax or any ES2015
// style due to usage in both Node and ES2015/Babel context
// Note that this file uses const and other valid ES6 syntax
// supported by Node.

const config = {
  logType: process.env.LOGTYPE || 'dev',
  port: process.env.APP_PORT || 3000,
  ip: process.env.APP_IP || 'localhost',
  env: process.env.NODE_ENV || 'dev'
};

module.exports = config;
