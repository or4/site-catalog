import { TItem } from 'core/catalog/items/reducer';

export enum ActionTypes {
  LOAD_ITEMS = '[Catalog/items] Load items',
  LOAD_ITEMS_SUCCESS = '[Catalog/items] Load items success',
  LOAD_ITEMS_FAIL = '[Catalog/items] Load items fail',
}

// Load items

export const LoadItems = {
  type: ActionTypes.LOAD_ITEMS,
};
export const LoadItemsSuccess = {
  type: ActionTypes.LOAD_ITEMS_SUCCESS,
};
export const LoadItemsFail = {
  type: ActionTypes.LOAD_ITEMS_FAIL,
};

export type TLoadItems = {
  type: ActionTypes.LOAD_ITEMS;
};
export type TLoadItemsSuccess = {
  type: ActionTypes.LOAD_ITEMS_SUCCESS;
  data: TItem[];
};
export type TLoadItemsFail = {
  type: ActionTypes.LOAD_ITEMS_FAIL;
  error: any;
};

export type ActionsAll = TLoadItems
  | TLoadItemsSuccess
  | TLoadItemsFail;
