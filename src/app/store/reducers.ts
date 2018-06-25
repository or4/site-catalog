import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

import { categoriesReducer, TCategoriesState, categoriesInitialState } from 'core/catalog/categories/reducer';
import { itemsReducer, TItemsState, itemsInitialState } from 'core/catalog/items/reducer';
import { amountItemsReducer, TAmountItemsState, amountItemsInitialState } from 'core/settings/amountItems/reducer';
import { pagesReducer, TPagesState, pagesInitialState } from 'core/catalog/pages/reducer';


export type AppState = {
  routing: RouterState | {};
  categories: TCategoriesState;
  items: TItemsState;
  amountItems: TAmountItemsState;
  pages: TPagesState;
};

export const appInitialState: AppState = {
  routing: {},
  categories: categoriesInitialState,
  items: itemsInitialState,
  amountItems: amountItemsInitialState,
  pages: pagesInitialState,
};

const rootReducer = combineReducers<AppState>({
  routing: routerReducer,
  categories: categoriesReducer,
  items: itemsReducer,
  amountItems: amountItemsReducer,
  pages: pagesReducer,
});

export default rootReducer;
