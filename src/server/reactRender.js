import React from 'react';
import ReactDOM from 'react-dom/server';
import { createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { loadOnServer } from 'redux-connect';
import { loadNamespaces } from 'react-i18next';
import createStore from '../redux/createStore';
import createRoutes from '../routes/createRoutes';
import matchRoutes from '../routes/matchRoutes';
import Html from '../components/Html/Html';
import App from '../components/App/App';
import i18n from './i18n-server';

export default function reactRender(app) {
  app.use(async (ctx, next) => {
    if (__DEVELOPMENT__) { // eslint-disable-line no-undef
      webpackIsomorphicTools.refresh(); // eslint-disable-line no-undef
    }

    const assets = webpackIsomorphicTools.assets(); // eslint-disable-line no-undef
    const memoryHistory = createMemoryHistory(ctx.url);
    const store = createStore(memoryHistory);
    const history = syncHistoryWithStore(memoryHistory, store, {
      selectLocationState: (state) => state.router
    });
    const routes = createRoutes(store);
    const routerKey = null;

    try {
      const matched = await matchRoutes({ routes, location: ctx.url, history });
      const { redirectLocation, renderProps } = matched;

      if (redirectLocation) {
        ctx.res.redirect(`${redirectLocation.pathname}${redirectLocation.search}`);
      } else if (renderProps) {
        const { params } = renderProps;
        const locale = params.locale || 'en-US';

        await (() => new Promise((resolve) => i18n.changeLanguage(locale, resolve)))();

        const i18nServer = i18n.cloneInstance();

        await loadNamespaces({ ...renderProps, i18n: i18nServer });

        await loadOnServer({ ...renderProps, store });
        const component = (
          <App
            store={store}
            history={history}
            routes={routes}
            routerKey={routerKey}
            i18n={i18nServer}
          />
        );

        ctx.body = `<!doctype html>\n${render(store, assets, component)}`;
        ctx.status = 200;
      }
    } catch (err) {
      console.error(err.stack);
      ctx.status = 500;
      ctx.body = render(store, assets);
    }

    return await next();
  });
}

function render(store, assets, component) {
  const htmlBody = ReactDOM.renderToString(
    <Html
      assets={assets}
      store={store}
      component={component}
    />
  );

  return `<!doctype html>\n${htmlBody}`;
}
