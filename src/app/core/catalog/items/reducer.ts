import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';

export type TItem = {
  id: number;
  idVirtual: string;
  isDefault: number;
  name: string;
  order: number;
  parentId: number;

  image: string;
  description: string;

  subItems?: TItem[];
};

type TState = {
  error?: any;
  requesting: boolean;
  data: {[key: string]: TItem[]};
};

const initialState: TState = {
  requesting: false,
  data: {}
};

export type TItemsState = TState;
export const itemsInitialState = initialState;
export const itemsReducer: Reducer<TState> = (state: TState = initialState, action: ActionsAll): TState => {
  switch (action.type) {
    case ActionTypes.LOAD_ITEMS:
      return { ...state, requesting: true };
    case ActionTypes.LOAD_ITEMS_SUCCESS:
      const { category, limit, page, data: dataCat } = action;
      const newState = {
        ...state,

        requesting: false,
        error: false
      };
      newState.data[category] = dataCat;

      return newState;
    case ActionTypes.LOAD_ITEMS_FAIL:
      return { ...state, error: action.error, requesting: false };

    default: return state;
  }
};

// export const selectItems = (state: any) => state.items;

