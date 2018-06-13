import { fork, all } from 'redux-saga/effects';
import categories from 'core/catalog/categories/sagas';
import items from 'core/catalog/items/sagas';

export default function* root() {
  yield all([
    ...categories,
    ...items,
  ]);
}