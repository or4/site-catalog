import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
// const { reducer } = require('redux-connect');

import { categoriesReducer, TCategoriesState, categoriesInitialState } from 'core/catalog/categories/reducer';


export type AppState = {
  routing: RouterState | {};
  categories: TCategoriesState;
};

export const appInitialState: AppState = {
  routing: {},
  categories: categoriesInitialState,
};

const rootReducer = combineReducers<AppState>({
  routing: routerReducer,
  categories: categoriesReducer,
});

export default rootReducer;
