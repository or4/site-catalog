import { all } from 'redux-saga/effects';
// import auth from '../core/auth/sagas';
// import wallet from '../core/wallet/sagas';
import test from 'core/sagas';



export function* rootSaga() {
  yield all([
    // ...auth,
    // ...wallet,
    ...test,
  ].reduce((allSagas, saga) => (allSagas as any).concat(saga), []));
}
