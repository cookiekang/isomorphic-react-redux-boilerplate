import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { loadNamespaces } from 'react-i18next';
import createStore from './redux/createStore';
import createRoutes from './routes/createRoutes';
import matchRoutes from './routes/matchRoutes';
import App from './components/App/App';
import i18n from './client/i18n-client';

render();

async function render() {
  const DOM_APP = document.getElementById('APP');
  const initialState = window.__data;
  const store = createStore(browserHistory, initialState);
  const routes = createRoutes(store);
  const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router
  });
  const { pathname, search, hash } = window.location;
  const location = `${pathname}${search}${hash}`;
  const routerKey = null;

  const matched = await matchRoutes({ routes, location });
  const { renderProps } = matched;
  const { params } = renderProps;
  const locale = params.locale || 'en-US';

  i18n.changeLanguage(locale);

  await loadNamespaces({ ...renderProps, i18n });

  ReactDOM.render(
    <App
      store={store}
      history={history}
      routes={routes}
      routerKey={routerKey}
      i18n={i18n}
    />,
    DOM_APP
  );
}
