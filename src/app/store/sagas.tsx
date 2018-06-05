import { all } from 'redux-saga/effects';
import test from './testSaga';

export function* rootSaga() {
  yield all([
    ...test,
  ].reduce((allSagas, saga) => (allSagas as any).concat(saga), []));
}
