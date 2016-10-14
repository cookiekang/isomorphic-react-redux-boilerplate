import { reducer as reduxAsyncConnect } from 'redux-connect';
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import home from './modules/home.redux';

export const makeRootReducer = (asyncReducers) => combineReducers({
  // Add sync reducers here
  router,
  reduxAsyncConnect,

  // Page reducers
  home,

  // Pseudo async reducers
  // These are injected by webpack bundles when navigated to the route
  // https://gist.github.com/gaearon/0a2213881b5d53973514
  boilerplate: (state = {}) => state,
  ...asyncReducers
});

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
