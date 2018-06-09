
import { take, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import { ActionTypes } from './actions';
import { Category } from 'core/catalog/categories/reducer';


function* loadCategories() {
  console.log('core catalog saga loadCategories LOAD_CATEGORIES');
  const result = yield axios.get(`http://rti-ck.kz/rti_cat.php`);

  console.log('core catalog saga loadCategories LOAD_CATEGORIES', result.data);
  yield put({
    type: ActionTypes.LOAD_CATEGORIES_SUCCESS,
    data: result.data.map((category: Category) => ({ id: category.id, name: category.name }))
  });
  yield take(ActionTypes.LOAD_CATEGORIES_SUCCESS);
}


export function* watchLoadCategories() {
  while (true) {
    yield take(ActionTypes.LOAD_CATEGORIES);
    yield fork(loadCategories);
  }
}
