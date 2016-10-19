import React from 'react';
import Html from '../../components/Html';
import App from '../../components/App';

export default function nkr() {
  return async (ctx, next) => {
    const app = (
      <App
        store={ctx.store}
        routes={ctx.routes}
        i18n={ctx.i18n}
        renderProps={ctx.renderProps}
      />
    );

    ctx.component = (
      <Html
        assets={ctx.assets}
        store={ctx.store}
        component={app}
      />
    );

    await next();
  };
}
