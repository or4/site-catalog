import { TCategory } from 'core/catalog/categories/types';

export enum ActionTypes {
  LOAD_CATEGORIES = '[Catalog/categories] Load categories',
  LOAD_INDEXED_CATEGORIES_SUCCESS = '[Catalog/categories] Load indexed categories success',
  LOAD_SEPARATED_CATEGORIES_SUCCESS = '[Catalog/categories] Load separated categories success',
  LOAD_CATEGORIES_FAIL = '[Catalog/categories] Load categories fail',
}

export type TLoadCategories = {
  type: ActionTypes.LOAD_CATEGORIES;
};
export type TLoadCategoriesSeparatedSuccess = {
  type: ActionTypes.LOAD_SEPARATED_CATEGORIES_SUCCESS;
  data: TCategory[];
};
export type TLoadCategoriesSortedSuccess = {
  type: ActionTypes.LOAD_INDEXED_CATEGORIES_SUCCESS;
  data: {[key: string]: TCategory};
};
export type TLoadCategoriesFail = {
  type: ActionTypes.LOAD_CATEGORIES_FAIL;
  error: any;
};

export type ActionsAll = TLoadCategories
  | TLoadCategoriesSeparatedSuccess
  | TLoadCategoriesSortedSuccess
  | TLoadCategoriesFail;
