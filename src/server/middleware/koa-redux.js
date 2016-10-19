import createStore from '../../redux/createStore';

export default function redux() {
  return async (ctx, next) => {
    ctx.store = createStore();
    await next();
  };
}
