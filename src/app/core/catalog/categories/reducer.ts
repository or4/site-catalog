import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';

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

// export const selectCategories = (state: any) => state.categories;

