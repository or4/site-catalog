const appConfig = require('../../../../config/main');
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import { IStore } from './IStore';

import createSagaMiddleware, { END } from 'redux-saga';
const { rootSaga } = require('store/sagas');
const sagaMiddleware = createSagaMiddleware();

//import thunk from 'redux-thunk';

export function configureStore(history: any, initialState?: IStore): Redux.Store<IStore> {

  const middlewares: Redux.Middleware[] = [
    routerMiddleware(history),
    sagaMiddleware,
    // thunk,
  ];

  const composeEnhancers = (appConfig.env !== 'production' &&
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store: Redux.Store<IStore> = createStore<IStore>(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));

  if (appConfig.env === 'development' && (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer((require('./reducers')));
    });
  }

  (store as any).runSaga = sagaMiddleware.run;
  (store as any).close = () => store.dispatch(END);
  // sagaMiddleware.run(rootSaga);

  return store;
}
