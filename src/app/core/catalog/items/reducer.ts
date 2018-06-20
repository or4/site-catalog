import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';
import { AppState } from 'store/reducers';

export type TItem = {
  id: number;
  category: string[];
  name: string;
};

type TState = {
  error?: any;
  requesting: boolean;
  data: TItem[];
};

const initialState: TState = {
  requesting: false,
  data: []
};

export type TItemsState = TState;
export const itemsInitialState = initialState;
export const itemsReducer: Reducer<TState> = (state: TState = initialState, action: ActionsAll): TState => {
  switch (action.type) {
    case ActionTypes.LOAD_ITEMS:
      return { ...state, requesting: true };
    case ActionTypes.LOAD_ITEMS_SUCCESS:
      return { ...state, data: action.data };
    case ActionTypes.LOAD_ITEMS_FAIL:
      return { ...state, error: action.error, requesting: false };

    default: return state;
  }
};

export const selectItems =
  (state: AppState, category: string) =>
    state.items.data.filter(item => item.category.indexOf(category) >= 0);

