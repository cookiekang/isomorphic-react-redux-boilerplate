import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import isClient from '../../utils/isClient';

const App = ({
  history,
  i18n,
  renderProps,
  routes,
  store
}) => {
  const routerChild = isClient() ? (
    <Router
      render={(props) => <ReduxAsyncConnect {...props} />}
      history={history}
      routes={routes}
    />
  ) : (
    <ReduxAsyncConnect {...renderProps} />
  );

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        {routerChild}
      </Provider>
    </I18nextProvider>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired,
  i18n: PropTypes.object,
  renderProps: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default App;
