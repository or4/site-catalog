/* eslint-disable no-console */
require('@babel/register');
import '@babel/polyfill';

let regeneratorRuntime =  require('regenerator-runtime');

import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'isomorphic-fetch';

import webpack from 'webpack';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import routes from './app/routes';
import React from 'react';
import Root from './Root';
import { renderToString } from 'react-dom/server';
import { match, createMemoryHistory } from 'react-router';
import { store } from 'store';
import root from 'core/sagas';
const path = require('path');

// simple return store
// const store = configureStore();

const config = require('../config/webpack/prod');

const compression = require('compression');

let app = express();
app.use(compression());

app.use('/public', express.static(path.join(__dirname, 'public')));
console.log('__dirname', __dirname);


let port = 3000;

let compiler = webpack(config);
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
// app.use(webpackHotMiddleware(compiler));

const layout = (body: any, initialState: any) => (`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8"/>
    <title>Redux-saga real-world universal example</title>
  </head>
  <body>
    <div id="root"><div>${body}</div></div>
    <script type="text/javascript" charset="utf-8">
      window.__INITIAL_STATE__ = ${initialState};
    </script>
    <script src="/public/js/vendor.js"></script>
    <script src="/public/js/app.js"></script>
  </body>
  </html>
`);

app.use(function(req: any, res: any) {


  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    // for dev
    // if (req.url === '/favicon.ico') { return }
    console.log('\n\n\nserver.tsx, req', req.url);

    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps && renderProps.components) {

      // perform Root constructor and transfer to it ref store
      const rootComp = <Root store={store} routes={routes} history={createMemoryHistory()} renderProps={renderProps} type="server" />;
      console.log('server.tsx, Root Component constructor inited');

      // initialization async genearators saga
      const sagaReady = store.runSaga(root);
      console.log('server.tsx, Sagas inited');

      // wait until all sagas would resolved
      sagaReady.done.then(() => {
        // now we have some data in store
        const newInitialState = JSON.stringify(store.getState());
        // console.log('server.tsx, sagas done newInitialState', newInitialState);

        // Run second render rootComp with changed data in store
        // and transfer newInitialState
        res.status(200).send(
          layout(
            renderToString(rootComp),
            newInitialState
          )
        );
        console.log('server.tsx, second render done!, data was sent');
      }).catch((e: any) => {
        console.log('server.tsx,', e.message);
        res.status(500).send(e.message);
      });

      // Run first render, there is call actions and next transfer to sagas
      renderToString(rootComp);
      console.log('server.tsx, first render done!');

      // dispatch END, that says saga ready to perform,
      // and all prepared actions start perform in sagas
      store.close();
      console.log('server.tsx, store.close()');
    } else {
      res.status(404).send('Not found');
      console.log('server.tsx, Not found');
    }
  });
});


app.listen(port, function(error: any) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});

