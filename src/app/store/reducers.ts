import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
// const { reducer } = require('redux-connect');

import { categoriesReducer, TCategoriesState, categoriesInitialState } from 'core/catalog/categories/reducer';
import { itemsReducer, TItemsState, itemsInitialState } from 'core/catalog/items/reducer';


export type AppState = {
  routing: RouterState | {};
  categories: TCategoriesState;
  items: TItemsState;
};

export const appInitialState: AppState = {
  routing: {},
  categories: categoriesInitialState,
  items: itemsInitialState,
};

const rootReducer = combineReducers<AppState>({
  routing: routerReducer,
  categories: categoriesReducer,
  items: itemsReducer,
});

export default rootReducer;
