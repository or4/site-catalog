import { AmountItemsType } from 'core/settings/amountItems/common';

export enum ActionTypes {
  CHANGE_AMOUNT_ITEMS_ON_PAGE = '[Settings/Amount items on page] Change amount items'
}

export type TChangeAmountType = {
  type: ActionTypes.CHANGE_AMOUNT_ITEMS_ON_PAGE;
  amountType: AmountItemsType;
};

export const changeAmountType = (amountType: AmountItemsType): TChangeAmountType => {
  return { type: ActionTypes.CHANGE_AMOUNT_ITEMS_ON_PAGE, amountType, };
};

export type ActionsAll = TChangeAmountType;
