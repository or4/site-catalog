import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';
import { AmountItemsType } from 'core/settings/amountItems/common';
import { AppState } from 'store/reducers';


type TState = AmountItemsType;

const initialState: TState = 'small';

export type TAmountItemsState = TState;
export const amountItemsInitialState = initialState;
export const amountItemsReducer: Reducer<TState> = (state: TState = initialState, action: ActionsAll): TState => {
  switch (action.type) {
    case ActionTypes.CHANGE_AMOUNT_ITEMS_ON_PAGE: return action.amountType;
    default: return state;
  }
};

export const selectAmountItems = (state: AppState) => state.amountItems;
