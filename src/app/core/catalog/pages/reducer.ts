import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';

type TState = {
  page: number;
};

const initialState: TState = {
  page: 1,
};

export type TPagesState = TState;
export const pagesInitialState = initialState;
export const pagesReducer: Reducer<TState> = (state: TState = initialState, action: ActionsAll): TState => {
  switch (action.type) {
    case ActionTypes.CHANGE_PAGE:
      return { ...state, page: action.page };
    default: return state;
  }
};
