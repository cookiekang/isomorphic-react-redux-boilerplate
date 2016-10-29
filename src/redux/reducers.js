import { reducer as reduxAsyncConnect } from 'redux-connect';
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as storageReducer } from 'redux-storage';
import locale from './modules/locale.redux';
import sidebar from './modules/sidebar.redux';
import navbar from './modules/navbar.redux';
import footer from './modules/footer.redux';
import localForage from './modules/localForage.redux';

export const makeRootReducer = (asyncReducers) => storageReducer(combineReducers({
  // Add sync reducers here
  router,
  reduxAsyncConnect,

  // Page reducers
  locale,
  sidebar,
  navbar,
  footer,
  localForage,

  // Pseudo async reducers
  // These are injected by webpack bundles when navigated to the route
  // https://gist.github.com/gaearon/0a2213881b5d53973514
  synthesizer: (state = {}) => state,
  help: (state = {}) => state,
  ...asyncReducers
}));

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
