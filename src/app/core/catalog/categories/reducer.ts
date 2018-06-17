import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';
import { AppState } from 'store/reducers';

export type TCategory = {
  id: number;
  idVirtual: string;
  isDefault: number;
  name: string;
  order: number;
  parentId: number;

  image: string;
  description: string;

  subItems?: TCategory[];
};

type TState = {
  error?: any;
  requesting: boolean;
  data: TCategory[];
};

const initialState: TState = {
  requesting: false,
  data: []
};

export type TCategoriesState = TState;
export const categoriesInitialState = initialState;
export const categoriesReducer: Reducer<TState> = (state: TState = initialState, action: ActionsAll): TState => {
  switch (action.type) {
    case ActionTypes.LOAD_CATEGORIES:
      return { ...state, requesting: true };
    case ActionTypes.LOAD_CATEGORIES_SUCCESS:
      return { ...state, data: action.data, requesting: false, error: false };
    case ActionTypes.LOAD_CATEGORIES_FAIL:
      return { ...state, error: action.error, requesting: false };

    default: return state;
  }
};

const selectCategoryRec = function(categoryName: string, data: TCategory[]): TCategory | null {
  for (let i = 0; i < data.length; i++) {
    const current = data[i];
    if (current.idVirtual === categoryName) {
      return current;
    }

    if (current.subItems.length > 0) {
      const found = selectCategoryRec(categoryName, current.subItems);
      if (found !== null) {
        return found;
      }
    }
  }

  return null;
};

export const selectCategory = (state: AppState, category: string) => {
  console.log('selectCategory category', category);
  // console.log('selectCategory category data', state.categories.data);
  return selectCategoryRec(category, state.categories.data);
};

