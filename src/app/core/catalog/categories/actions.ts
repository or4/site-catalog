import { TCategory } from 'core/catalog/categories/reducer';

export enum ActionTypes {
  LOAD_CATEGORIES = '[Catalog/categories] Load categories',
  LOAD_CATEGORIES_SUCCESS = '[Catalog/categories] Load categories success',
  LOAD_CATEGORIES_FAIL = '[Catalog/categories] Load categories fail',
}

// Load categories

export const LoadCategories = {
  type: ActionTypes.LOAD_CATEGORIES,
};
export const LoadCategoriesSuccess = {
  type: ActionTypes.LOAD_CATEGORIES_SUCCESS,
};
export const LoadCategoriesFail = {
  type: ActionTypes.LOAD_CATEGORIES_FAIL,
};

export type TLoadCategories = {
  type: ActionTypes.LOAD_CATEGORIES;
};
export type TLoadCategoriesSuccess = {
  type: ActionTypes.LOAD_CATEGORIES_SUCCESS;
  data: TCategory[];
};
export type TLoadCategoriesFail = {
  type: ActionTypes.LOAD_CATEGORIES_FAIL;
  error: any;
};

export type ActionsAll = TLoadCategories
  | TLoadCategoriesSuccess
  | TLoadCategoriesFail;
