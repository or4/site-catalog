
import { take, put, fork, call } from 'redux-saga/effects';
import axios from 'axios';
import { ActionTypes as CategoriesActionTypes } from './actions';
import { TCategory } from 'core/catalog/categories/reducer';
import { convertCategories } from 'core/catalog/categories/converter';
import { takeLatest } from 'redux-saga';

import { ActionTypes as ItemsActionTypes } from '../items/actions';

// function* loadCategories() {
//   console.log('API: core catalog saga loadCategories LOAD_CATEGORIES');
//   try {
//     const { data } = yield axios.get(`http://rti-ck.kz/rti_cat.php`);
//     if (!data) { throw new Error('core catalog saga loadCategories, data is empty') }

//     const categories = convertCategories(data);

//     yield put({
//       type: CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS,
//       data: categories,
//     });
//     yield take(CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS);

//   } catch (error) {
//     yield take(CategoriesActionTypes.LOAD_CATEGORIES_FAIL);
//     console.log('CategoriesActionTypes.LOAD_CATEGORIES_FAIL', error);
//   }
// }


function* loadData() {
  console.log('API: core catalog saga loadData LOAD_CATEGORIES');
  try {
    let date = new Date();
    console.log(`categories preload ${date.getMinutes()}:${date.getSeconds()}`);

    const { data: categoriesData } = yield call(axios.get, `http://rti-ck.kz/rti_cat.php`);
    if (!categoriesData) { throw new Error('core catalog saga loadCategories, data is empty') }

    date = new Date();
    console.log(`categories loaded ${date.getMinutes()}:${date.getSeconds()}`);

    const categories = convertCategories(categoriesData);
    date = new Date();
    console.log(`categories converted ${date.getMinutes()}:${date.getSeconds()}`, categoriesData.length);

    yield put({
      type: CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS,
      data: categories,
    });

    date = new Date();
    console.log(`items preload ${date.getMinutes()}:${date.getSeconds()}`, categoriesData.length);

    const { data: itemsData } = yield call(axios.get, `http://rti-ck.kz/rti_items.php`);
    if (!itemsData) { throw new Error('core catalog saga loadCategories, data is empty') }

    // const items = convertCategories(itemsData);
    date = new Date();
    console.log(`items loaded ${date.getMinutes()}:${date.getSeconds()}`, itemsData.length);


    yield put({
      type: ItemsActionTypes.LOAD_ITEMS_SUCCESS,
      data: itemsData,
    });

    date = new Date();
    console.log(`saga done! ${date.getMinutes()}:${date.getSeconds()}`);
  } catch (error) {
    yield take(CategoriesActionTypes.LOAD_CATEGORIES_FAIL);
    console.log('ActionTypes.LOAD_CATEGORIES_FAIL', error);
  }
}



export default [
  takeLatest(CategoriesActionTypes.LOAD_CATEGORIES, loadData),
];
