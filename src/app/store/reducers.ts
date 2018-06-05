import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<any> = combineReducers<any>({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
