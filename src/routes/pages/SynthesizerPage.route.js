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
      const SynthesizerPage = require('../../components/SynthesizerPage');
      const reducer = require('../../redux/modules/synthesizerPage.redux').default;

      /*  Add the reducer to the store on key 'hourly'  */
      injectReducer(store, { key: 'synthesizerPage', reducer });

      /*  Return getComponent   */
      cb(null, SynthesizerPage);

    /* Webpack named bundle   */
    }, 'synthesizerPage');
  }
});
