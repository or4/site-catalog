// export enum ActionTypes {
//   LOAD_CATEGORIES = '[Catalog/categories] Load categories',
//   LOAD_CATEGORIES_SUCCESS = '[Catalog/categories] Load categories success',
//   LOAD_CATEGORIES_FAIL = '[Catalog/categories] Load categories fail',
//   LOAD_ITEMS = '[Catalog/categories] Load items',
//   LOAD_ITEMS_SUCCESS = '[Catalog/categories] Load items success',
//   LOAD_ITEMS_FAIL = '[Catalog/categories] Load items fail',
// }

// // Load categories

// export const LoadCategories = {
//   type: ActionTypes.LOAD_CATEGORIES,
// };
// export const LoadCategoriesSuccess = {
//   type: ActionTypes.LOAD_CATEGORIES_SUCCESS,
// };
// export const LoadCategoriesFail = {
//   type: ActionTypes.LOAD_CATEGORIES_FAIL,
// };

// export type Category = {
//   id: string;
//   name: string;
// };

// export type Item = {
//   id: string;
//   name: string;
// };


// export type TLoadCategories = {
//   type: ActionTypes.LOAD_CATEGORIES;
// };
// export type TLoadCategoriesSuccess = {
//   type: ActionTypes.LOAD_CATEGORIES_SUCCESS;
//   data: Category[];
// };

// export type TLoadItems = {
//   type: ActionTypes.LOAD_ITEMS;
// };
// export type TLoadItemsSuccess = {
//   type: ActionTypes.LOAD_ITEMS_SUCCESS;
//   payload: Item[];
// };

// export type AllActions = TLoadCategories
//   | TLoadCategoriesSuccess
//   | TLoadItems
//   | TLoadItemsSuccess;