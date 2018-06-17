import React from 'react';
import { render } from 'react-dom';

import { browserHistory } from 'react-router';
import routes from './app/routes';
import Root from './Root';
import { configureStore } from 'store';
import root from 'core/sagas';

let regeneratorRuntime =  require('regenerator-runtime');

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(root);

render(
  <Root
    store={store}
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
