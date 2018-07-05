import { AmountItemsType } from 'core/types';

export enum ActionTypes {
  CHANGE_AMOUNT_ITEMS_ON_PAGE = '[Settings/Amount items on page] Change amount items'
}

// change amount items

export type TChangeAmountItems = {
  type: ActionTypes.CHANGE_AMOUNT_ITEMS_ON_PAGE;
  amountType: AmountItemsType;
};

export const changeAmountType = (amountType: AmountItemsType): TChangeAmountItems => {
  return { type: ActionTypes.CHANGE_AMOUNT_ITEMS_ON_PAGE, amountType, };
};

export type ActionsAll = TChangeAmountItems;
