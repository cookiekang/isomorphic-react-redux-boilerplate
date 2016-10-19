export default function webpackIsoTools() {
  return async (ctx, next) => {
    if (__DEVELOPMENT__) { // eslint-disable-line no-undef
      webpackIsomorphicTools.refresh(); // eslint-disable-line no-undef
    }

    ctx.assets = webpackIsomorphicTools.assets(); // eslint-disable-line no-undef

    await next();
  };
}
