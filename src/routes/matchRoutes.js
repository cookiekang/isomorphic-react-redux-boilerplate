import { match } from 'react-router';

export default function matchRoutes(context) {
  const { routes, location, history } = context;

  return new Promise((resolve, reject) => {
    match({ routes, location, history }, (error, redirectLocation, renderProps) => {
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

      return reject(new Error('Not found'));
    });
  });
}
