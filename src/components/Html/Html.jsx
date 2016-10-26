import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
const Html = ({
  assets,
  component,
  store
}) => {
  const content = component ? ReactDOM.renderToString(component) : '';
  const head = Helmet.rewind();
  const domApp = { __html: content };
  const domState = { __html: `window.__data=${serialize(store.getState())};` };

  const clientScripts = ([
    <script key="state" dangerouslySetInnerHTML={domState} charSet="UTF-8" />,
    <script key="vendor" src={assets.javascript.vendor} charSet="UTF-8" />,
    <script key="main" src={assets.javascript.main} charSet="UTF-8" />
  ]);

  const clientCss = Object.keys(assets.styles)
    .map((style, key) => (
      <link
        href={assets.styles[style]}
        key={key} media="screen, projection"
        rel="stylesheet" type="text/css"
        charSet="UTF-8"
      />
    ));

  return (
    <html lang="en-us">
      <head>
        <meta charSet="utf-8" />
        <meta htp-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        <link rel="shortcut icon" href="/favicon.ico" />
        {clientCss}
      </head>
      <body>
        <div
          id="APP"
          dangerouslySetInnerHTML={domApp}
        />
        {clientScripts}
      </body>
    </html>
  );
};

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object
};

export default Html;
