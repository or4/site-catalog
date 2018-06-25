import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

import { categoriesReducer, TCategoriesState, categoriesInitialState } from 'core/catalog/categories/reducer';
import { itemsReducer, TItemsState, itemsInitialState } from 'core/catalog/items/reducer';
import { amountItemsReducer, TAmountItemsState, amountItemsInitialState } from 'core/settings/amountItems/reducer';


export type AppState = {
  routing: RouterState | {};
  categories: TCategoriesState;
  items: TItemsState;
  amountItems: TAmountItemsState;
};

export const appInitialState: AppState = {
  routing: {},
  categories: categoriesInitialState,
  items: itemsInitialState,
  amountItems: amountItemsInitialState,
};

const rootReducer = combineReducers<AppState>({
  routing: routerReducer,
  categories: categoriesReducer,
  items: itemsReducer,
  amountItems: amountItemsReducer,
});

export default rootReducer;
