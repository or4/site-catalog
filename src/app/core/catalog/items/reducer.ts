// import { Reducer } from 'redux';

// import { ActionTypes } from './actions';

// type TState = {
//   error?: any;
//   requesting: boolean;
//   data: any;
// };

// const initialState: TState = {
//   requesting: false,
//   data: []
// };

// export type TCategoriesState = TState;
// export const categoriesInitialState = initialState;
// export const categories: Reducer<TState> = (state: TState = initialState, action: any): TState => {
//   switch (action.type) {
//     case ActionTypes.LOAD_CATEGORIES:
//       return { ...state, requesting: true };
//     case ActionTypes.LOAD_CATEGORIES_SUCCESS:
//       return { ...state, data: action.data, requesting: false, error: false };
//     case ActionTypes.LOAD_CATEGORIES_FAIL:
//       return { ...state, error: action.error, requesting: false };

//     default: return state;
//   }
// };

// // export const selectCategories = (state: any) => state.categories;

