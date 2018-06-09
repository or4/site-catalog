// import '@babel/polyfill';
// React imports
import React from 'react';
import { render } from 'react-dom';

// app specific imports
import { browserHistory } from 'react-router';
import routes from './app/routes';
import Root from './Root';
import { configureStore } from 'store';
import root from 'store/sagas';
// import { rootSaga } from 'store/sagas';

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



// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import { Main } from './Main';

// ReactDOM.hydrate(Main,
//   document.getElementById('app'),
// );

// if (process.env.NODE_ENV === 'development' && (module as any).hot) {
// (module as any).hot.accept('./Main', () => {
//   const NewApp = require('./Main').default;
//   console.log('rerender');
//   ReactDOM.hydrate(<NewApp />, document.getElementById('app'));
// });
// }