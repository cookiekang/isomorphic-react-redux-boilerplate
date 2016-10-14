import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

const App = ({ history, routes, routerKey, store, i18n }) => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router
        render={(props) => <ReduxAsyncConnect {...props} />}
        history={history}
        children={routes}
        key={routerKey}
      />
    </Provider>
  </I18nextProvider>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  routerKey: PropTypes.number,
  store: PropTypes.object.isRequired,
  i18n: PropTypes.object
};

export default App;
