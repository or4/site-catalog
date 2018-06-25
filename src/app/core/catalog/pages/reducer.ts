import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';
import { ActionTypes as AmountItemsActionTypes, ActionsAll as AmountItemsActionsAll } from '../../settings/amountItems/actions';
import { LOCATION_CHANGE } from 'react-router-redux';

type TState = {
  page: number;
};

const initialState: TState = {
  page: 1,
};

export type TPagesState = TState;
export const pagesInitialState = initialState;
export const pagesReducer: Reducer<TState> = (state: TState = initialState, action: ActionsAll | AmountItemsActionsAll): TState => {
  switch (action.type) {
    case LOCATION_CHANGE:
    case AmountItemsActionTypes.CHANGE_AMOUNT_ITEMS_ON_PAGE: {
      return { ...state, page: 1 };
    }
    case ActionTypes.CHANGE_PAGE:
      return { ...state, page: action.page };
    default: return state;
  }
};
