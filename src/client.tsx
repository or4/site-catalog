// import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Main } from './Main';

ReactDOM.hydrate(Main,
  document.getElementById('app'),
);

// if (process.env.NODE_ENV === 'development' && (module as any).hot) {
// (module as any).hot.accept('./Main', () => {
//   const NewApp = require('./Main').default;
//   console.log('rerender');
//   ReactDOM.hydrate(<NewApp />, document.getElementById('app'));
// });
// }