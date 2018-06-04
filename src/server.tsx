const appConfig = require('../config/main');

import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'isomorphic-fetch';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { Provider } from 'react-redux';
import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
const { ReduxAsyncConnect, /* loadOnServer*/ } = require('redux-connect');
import { configureStore } from './app/core/redux/store';
import routes from './app/routes';
import Html from './Html';

const express = require('express');
const path = require('path');
const Chalk = require('chalk');
const favicon = require('serve-favicon');
const manifest = require('../build/manifest.json');

const app = express();

import rootSaga from 'store/sagas';

// const compression = require('compression');
// app.use(compression());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../config/webpack/dev');
  const webpackCompiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    quiet: true,
  }));

  app.use(require('webpack-hot-middleware')(webpackCompiler));
}

app.use(favicon(path.join(__dirname, 'public/favicon.ico')));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('*', (req: any, res: any) => {
  const location = req.url;
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({ history, routes, location },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        // const asyncRenderData = Object.assign({}, renderProps, { store });



        (store as any).runSaga(rootSaga).toPromise().then(() => {
          console.log('sagas complete');

          const markup = ReactDOMServer.renderToString(
            <Provider store={store} key="provider">
              <ReduxAsyncConnect {...renderProps} />
            </Provider>,
          );
          res.status(200).send(renderHTML(markup, store));
        }).catch((e: any) => {
          console.log(e.message);
          res.status(500).send(e.message);
        });

        const markup = ReactDOMServer.renderToString(
          <Provider store={store} key="provider">
            <ReduxAsyncConnect {...renderProps} />
          </Provider>,
        );
        res.status(200).send(renderHTML(markup, store));
        (store as any).close();


        // loadOnServer(asyncRenderData).then(() => {
        //   const markup = ReactDOMServer.renderToString(
        //     <Provider store={store} key="provider">
        //       <ReduxAsyncConnect {...renderProps} />
        //     </Provider>,
        //   );
        //   res.status(200).send(renderHTML(markup, store));
        // });
      } else {
        res.status(404).send('Not Found?');
      }
    });
});

app.listen(appConfig.port, appConfig.host, (err: any) => {
  if (err) {
    console.error(Chalk.bgRed(err));
  } else {
    console.info(Chalk.black.bgGreen(
      `\n\n💂  Listening at http://${appConfig.host}:${appConfig.port}\n`,
    ));
  }
});

function renderHTML(markup: string, store: any) {
  const html = ReactDOMServer.renderToString(
    <Html markup={markup} manifest={manifest} store={store} />,
  );

  const htmlContent = `<!doctype html> ${html}`;

  // console.log(htmlContent);

  return htmlContent;
}
