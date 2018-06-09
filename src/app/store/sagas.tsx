import { all } from 'redux-saga/effects';
import test from './testSaga';


export default function* root() {
  console.log('store saga root pre');
  yield all([
    ...test,
  ]);

  // console.log('store saga root pre loadCategories');
  // yield fork(loadCategories);

  // console.log('store saga root pre LOAD_CATEGORIES_SUCCESS');
  // yield take(ActionTypes.LOAD_CATEGORIES_SUCCESS);
  console.log('store saga root after');
}
