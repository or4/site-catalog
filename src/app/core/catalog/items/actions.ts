import { TItem } from 'core/catalog/items/reducer';

export enum ActionTypes {
  LOAD_ITEMS = '[Catalog/items] Load items',
  LOAD_ITEMS_SUCCESS = '[Catalog/items] Load items success',
  LOAD_ITEMS_FAIL = '[Catalog/items] Load items fail',
}

// Load items

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


export const loadItems = (): TLoadItems => {
  return { type: ActionTypes.LOAD_ITEMS };
};

export type ActionsAll = TLoadItems
  | TLoadItemsSuccess
  | TLoadItemsFail;
