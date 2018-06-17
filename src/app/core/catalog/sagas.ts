
import { takeLatest, take, put, fork, call } from 'redux-saga/effects';
import axios from 'axios';
import log from 'util/logger';

import { ActionTypes as CategoriesActionTypes } from './categories/actions';
import { ActionTypes as ItemsActionTypes } from './items/actions';
import { TCategory } from './categories/reducer';
import { convertCategories, sortCategories, separateData, convertCategoriesToObject, } from './categories/converter';


function* loadData() {
  log('API: core catalog saga loadData LOAD_CATEGORIES');
  try {

    log(`categories preload`);
    const { data: serverData } = yield call(axios.get, `http://rti-ck.kz/rti_cat.php`);
    if (!serverData) { throw new Error('core catalog saga loadCategories, data is empty') }
    log(`categories loaded`);

    const converted = convertCategories(serverData);
    const sorted = sortCategories(converted);
    const obj = convertCategoriesToObject(sorted);
    yield put({
      type: CategoriesActionTypes.LOAD_SORTED_CATEGORIES_SUCCESS,
      data: obj,
    });

    const separated = separateData(sorted);
    log(`categories converted`, separated.length);


    yield put({
      type: CategoriesActionTypes.LOAD_SEPARATED_CATEGORIES_SUCCESS,
      data: separated,
    });


    log(`items preload`);

    const { data: itemsData } = yield call(axios.get, `http://rti-ck.kz/rti_items.php`);
    if (!itemsData) { throw new Error('core catalog saga loadCategories, data is empty') }

    // const items = convertCategories(itemsData);

    log(`items loaded`, itemsData.length);


    yield put({
      type: ItemsActionTypes.LOAD_ITEMS_SUCCESS,
      data: itemsData,
    });


    log(`saga done!`);
  } catch (error) {
    yield take(CategoriesActionTypes.LOAD_CATEGORIES_FAIL);
    log('ActionTypes.LOAD_CATEGORIES_FAIL', error);
  }
}



export default [
  takeLatest(CategoriesActionTypes.LOAD_CATEGORIES, loadData),
];
