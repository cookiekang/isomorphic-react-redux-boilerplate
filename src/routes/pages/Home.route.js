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
      const Home = require('../../components/Home');
      const reducer = require('../../redux/modules/home.redux').default;

      /*  Add the reducer to the store on key 'home'  */
      injectReducer(store, { key: 'home', reducer });

      /*  Return getComponent   */
      cb(null, Home);

    /* Webpack named bundle   */
    }, 'home');
  }
});
