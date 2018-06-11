import { fork, all } from 'redux-saga/effects';
import { watchLoadCategories } from 'core/catalog/categories/sagas';
import { watchLoadItems } from 'core/catalog/items/sagas';

export default function* root() {
  yield all([
    fork(watchLoadCategories),
    fork(watchLoadItems),
  ]);
}