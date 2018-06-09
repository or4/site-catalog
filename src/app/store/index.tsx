// const appConfig = require('../../../config/main');
import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';

import createSagaMiddleware, { END } from 'redux-saga';
// import { ActionTypes } from './actions';
// const { rootSaga } = require('store/sagas');
const sagaMiddleware = createSagaMiddleware();

// const memoryHistory = createMemoryHistory(req.originalUrl);
// const history = syncHistoryWithStore(memoryHistory, store);
// const store = configureStore(memoryHistory);

// export function configureStore(history: any, initialState?: any): Redux.Store<any> {

//   const middlewares: Redux.Middleware[] = [
//     routerMiddleware(history),
//     sagaMiddleware,
//   ];

//   const composeEnhancers = (appConfig.env !== 'production' &&
//     typeof window === 'object' &&
//     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//   const store: Redux.Store<any> = createStore<any>(rootReducer, initialState, composeEnhancers(
//     applyMiddleware(...middlewares),
//   ));

//   if (appConfig.env === 'development' && (module as any).hot) {
//     (module as any).hot.accept('./reducers', () => {
//       store.replaceReducer((require('./reducers')));
//     });
//   }

//   (store as any).runSaga = sagaMiddleware.run;
//   (store as any).close = () => store.dispatch(END);

//   sagaMiddleware.run(rootSaga);

//   store.dispatch({ type: ActionTypes.LOAD_BALANCE });
//   return store;
// }



export function configureStore(initialState?: any) {
  console.log('called configureStore');

  let resCompose: any;

  try {
    resCompose = compose(
      applyMiddleware(
        sagaMiddleware
      ),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    );
    console.log('devTools');

  } catch (e) {
    resCompose = compose(
      applyMiddleware(
        sagaMiddleware
      ),
    );

    console.log('no devTools');
  }

  const store = createStore(
    rootReducer,
    initialState,
    resCompose
  ) as any;

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}

export const store = configureStore();

