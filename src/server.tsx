/* eslint-disable no-console */
// import '@babel/polyfill';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import routes from './app/routes';
import React from 'react';
import Root from './Root';
import { renderToString } from 'react-dom/server';
import { match, createMemoryHistory } from 'react-router';
import { store } from 'store';
import root from 'core/sagas';

// simple return store
//const store = configureStore();

const config = require('../config/webpack/dev');

let app = express();
let port = 3000;

let compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

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
    <script src="/public/js/app.js"></script>
  </body>
  </html>
`);

app.use(function(req: any, res: any) {


  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    // for dev
    if (req.url === '/favicon.ico') { return }
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



// const appConfig = require('../config/main');
// require('babel-core/register');
// require('babel-polyfill');

// import * as e6p from 'es6-promise';
// (e6p as any).polyfill();
// import 'isomorphic-fetch';

// import * as React from 'react';
// import * as ReactDOMServer from 'react-dom/server';

// import { Provider } from 'react-redux';
// // import { createMemoryHistory, match } from 'react-router';
// // import { syncHistoryWithStore } from 'react-router-redux';
// const { ReduxAsyncConnect, loadOnServer } = require('redux-connect');
// // import { configureStore } from 'store';
// import routes from './app/routes';
// import Html from './Html';

// const express = require('express');
// const path = require('path');
// const Chalk = require('chalk');
// const favicon = require('serve-favicon');
// const manifest = require('../build/manifest.json');

// const app = express();


// const { rootSaga } = require('store/sagas');

// // const compression = require('compression');
// // app.use(compression());

// if (process.env.NODE_ENV !== 'production') {
//   const webpack = require('webpack');
//   const webpackConfig = require('../config/webpack/dev');
//   const webpackCompiler = webpack(webpackConfig);

//   app.use(require('webpack-dev-middleware')(webpackCompiler, {
//     publicPath: webpackConfig.output.publicPath,
//     stats: { colors: true },
//     noInfo: true,
//     hot: true,
//     inline: true,
//     lazy: false,
//     historyApiFallback: true,
//     quiet: true,
//   }));

//   app.use(require('webpack-hot-middleware')(webpackCompiler));
// }

// app.use(favicon(path.join(__dirname, 'public/favicon.ico')));

// app.use('/public', express.static(path.join(__dirname, 'public')));

// app.get('*', (req: any, res: any) => {
//   const location = req.url;

//   match({ history, routes, location },
//     (error, redirectLocation, renderProps) => {
//       if (error) {
//         res.status(500).send(error.message);
//       } else if (redirectLocation) {
//         res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//       } else if (renderProps) {
//         const asyncRenderData = Object.assign({}, renderProps, { store });

//         const resSaga = (store as any).runSaga(rootSaga);

//         console.log('(store as any).runSaga(rootSaga)', resSaga);
//         console.log('(store as any).runSaga(rootSaga).done', resSaga.done);
//         (store as any).runSaga(rootSaga).done.then(() => {
//           console.log('sagas complete');
//         });


//         // (store as any).runSaga(rootSaga).toPromise().then(() => {
//         //   console.log('sagas complete');

//         //   const markup = ReactDOMServer.renderToString(
//         //     <Provider store={store} key="provider">
//         //       <ReduxAsyncConnect {...renderProps} />
//         //     </Provider>,
//         //   );
//         //   res.status(200).send(renderHTML(markup, store));
//         // }).catch((e: any) => {
//         //   console.log(e.message);
//         //   res.status(500).send(e.message);
//         // });

//         // const markup = ReactDOMServer.renderToString(
//         //   <Provider store={store} key="provider">
//         //     <ReduxAsyncConnect {...renderProps} />
//         //   </Provider>,
//         // );
//         // res.status(200).send(renderHTML(markup, store));
//         // (store as any).close();


//         loadOnServer(asyncRenderData).then(() => {
//           const markup = ReactDOMServer.renderToString(
//             <Provider store={store} key="provider">
//               <ReduxAsyncConnect {...renderProps} />
//             </Provider>,
//           );
//           res.status(200).send(renderHTML(markup, store));
//         });
//       } else {
//         res.status(404).send('Not Found?');
//       }
//     });
// });

// app.listen(appConfig.port, appConfig.host, (err: any) => {
//   if (err) {
//     console.error(Chalk.bgRed(err));
//   } else {
//     console.info(Chalk.black.bgGreen(
//       `\n\n💂  Listening at http://${appConfig.host}:${appConfig.port}\n`,
//     ));
//   }
// });

// function renderHTML(markup: string, store: any) {
//   const html = ReactDOMServer.renderToString(
//     <Html markup={markup} manifest={manifest} store={store} />,
//   );

//   const htmlContent = `<!doctype html> ${html}`;

//   // console.log(htmlContent);

//   return htmlContent;
// }
