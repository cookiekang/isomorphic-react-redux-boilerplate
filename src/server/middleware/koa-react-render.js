import ReactDOM from 'react-dom/server';

export default function renderReact() {
  return async (ctx, next) => {
    ctx.status = 200;
    ctx.body = render(ctx.component);
    await next();
  };
}

function render(component) {
  const htmlBody = ReactDOM.renderToString(component);

  return `<!doctype html>\n${htmlBody}`;
}
