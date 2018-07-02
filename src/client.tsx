import React from 'react';
import { render } from 'react-dom';

import { browserHistory } from 'react-router';
import routes from './app/routes';
import Root from './Root';
import { configureStore } from 'store';
import root from 'core/sagas';
import { log, logIntendation, IntendationType } from './app/util/logger';
import './client.scss';

let regeneratorRuntime =  require('regenerator-runtime');

let date = new Date();
logIntendation(IntendationType.start, `client.tsx, start  ${date.getMinutes()}:${date.getSeconds()}`);

export const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(root);

date = new Date();

logIntendation(IntendationType.start, `client.tsx, runedSaga  ${date.getMinutes()}:${date.getSeconds()}`);

render(
  <Root
    store={store}
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
