import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './middleware/promiseMiddleware';
import createLogger from 'redux-logger';
import makeRootReducer from './reducers';
import isClient from '../utils/isClient';
import isDevelopment from '../utils/isDevelopment';

const loggerMiddleware = createLogger();

export default (history, initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    promiseMiddleware(),
    thunkMiddleware,
    routerMiddleware(history)
  ];

  if (isDevelopment() && isClient()) {
    middleware.push(loggerMiddleware);
  }

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  if (isDevelopment() && isClient()) {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  return store;
};
