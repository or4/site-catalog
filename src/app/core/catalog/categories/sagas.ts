
import { take, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import { ActionTypes } from './actions';
import { TCategory } from 'core/catalog/categories/reducer';
import { convertCategories } from 'core/catalog/categories/converter';
import { takeLatest } from 'redux-saga';


function* loadCategories() {
  console.log('core catalog saga loadCategories LOAD_CATEGORIES');
  try {
    const { data } = yield axios.get(`http://rti-ck.kz/rti_cat.php`);
    if (!data) { throw new Error('core catalog saga loadCategories, data is empty') }

    const categories = convertCategories(data);

    yield put({
      type: ActionTypes.LOAD_CATEGORIES_SUCCESS,
      data: categories,
    });
    yield take(ActionTypes.LOAD_CATEGORIES_SUCCESS);

  } catch (error) {
    yield take(ActionTypes.LOAD_CATEGORIES_FAIL);
    console.log('ActionTypes.LOAD_CATEGORIES_FAIL', error);
  }
}


export default [
  takeLatest(ActionTypes.LOAD_CATEGORIES, loadCategories),
];


// export function* watchLoadCategories() {
//   while (true) {
//     yield take(ActionTypes.LOAD_CATEGORIES);
//     yield fork(loadCategories);
//   }
// }
