import { match } from 'react-router';
import createRoutes from '../../routes/createRoutes';

export default function reactRouter() {
  return async (ctx, next) => {
    const routes = createRoutes(ctx.store);
    const {
      redirectLocation,
      renderProps
    } = await matchRoutes({ location: ctx.url, routes });

    ctx.routes = routes;

    if (redirectLocation) {
      ctx.res.redirect(`${redirectLocation.pathname}${redirectLocation.search}`);
    }

    if (renderProps) {
      ctx.renderProps = renderProps;
    }

    await next();
  };
}

function matchRoutes(context) {
  const {
    routes,
    location,
    history
  } = context;

  return new Promise((resolve, reject) => {
    match({
      routes,
      location,
      history
    }, (
      error,
      redirectLocation,
      renderProps
    ) => {
      if (error) {
        return reject(error);
      }

      if (redirectLocation) {
        return resolve({
          redirectLocation
        });
      }

      if (renderProps) {
        return resolve({
          renderProps
        });
      }

      return reject(new Error('Unknown route'));
    });
  });
}
