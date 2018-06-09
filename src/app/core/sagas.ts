import { fork, all } from 'redux-saga/effects';
import { watchLoadCategories } from 'core/catalog/categories/sagas';

export default function* root() {
  yield all([
    fork(watchLoadCategories),
  ]);
}