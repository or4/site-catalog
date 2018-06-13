
import { take, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import { ActionTypes, TLoadItems } from './actions';
import { TItem } from 'core/catalog/items/reducer';
import { convertItems } from 'core/catalog/items/converter';
import { takeLatest } from 'redux-saga';


function* loadItems(action: TLoadItems) {
  console.log('API: core catalog saga loadItems LOAD_ITEMS');
  try {
    const { category, limit, page } = action;
    const { data } = yield axios.get(`http://rti-ck.kz/rti_items.php?category=${category}&limit=${limit}&page=${page}`);
    if (!data) { throw new Error('core catalog saga loadItems, data is empty') }

    yield put({
      type: ActionTypes.LOAD_ITEMS_SUCCESS,
      data: data,
    });
    yield take(ActionTypes.LOAD_ITEMS_SUCCESS);

  } catch (error) {
    yield take(ActionTypes.LOAD_ITEMS_FAIL);
    console.log('ActionTypes.LOAD_ITEMS_FAIL', error);
  }
}

export default [
  takeLatest(ActionTypes.LOAD_ITEMS, loadItems),
];
