export enum ActionTypes {
  LOAD_BALANCE = '[Wallet/balance] Load balance',
  LOAD_BALANCE_SUCCESS = '[Wallet/balance] Load balance success',
  LOAD_BALANCE_FAIL = '[Wallet/balance] Load balance fail',
}

// Balance Set InitialState

export const LoadBalance = {
  type: ActionTypes.LOAD_BALANCE,
};
export const LoadBalanceSuccess = {
  type: ActionTypes.LOAD_BALANCE_SUCCESS,
};
export const LoadBalanceFail = {
  type: ActionTypes.LOAD_BALANCE_FAIL,
};

