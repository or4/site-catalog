import { Action } from 'redux';
import { AmountType } from 'core/settings/amountItems/common';

export enum ActionTypes {
  CHANGE_AMOUNT_ITEMS_ON_PAGE = '[Settings/Amount items on page] Change amount items'
}

export class ChangeAmountType implements Action {
  public readonly type = ActionTypes.CHANGE_AMOUNT_ITEMS_ON_PAGE;
  constructor(public amountType: AmountType) { }
}


export type ActionsAll = ChangeAmountType;
