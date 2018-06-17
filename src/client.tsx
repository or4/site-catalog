import React from 'react';
import { render } from 'react-dom';

import { browserHistory } from 'react-router';
import routes from './app/routes';
import Root from './Root';
import { configureStore } from 'store';
import root from 'core/sagas';

let regeneratorRuntime =  require('regenerator-runtime');

let date = new Date();
console.log(`\n\n\nclient.tsx, start  ${date.getMinutes()}:${date.getSeconds()}`);

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(root);

date = new Date();
console.log(`\n\n\nclient.tsx, runedSaga  ${date.getMinutes()}:${date.getSeconds()}`);

render(
  <Root
    store={store}
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
