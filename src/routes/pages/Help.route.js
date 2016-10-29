// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import { injectReducer } from '../../redux/reducers';

export default (store, path) => ({
  path,

  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {

    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {

      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Help = require('../../components/Help');
      const reducer = require('../../redux/modules/help.redux').default;

      /*  Add the reducer to the store on key 'hourly'  */
      injectReducer(store, { key: 'help', reducer });

      /*  Return getComponent   */
      cb(null, Help);

    /* Webpack named bundle   */
    }, 'help');
  }
});
