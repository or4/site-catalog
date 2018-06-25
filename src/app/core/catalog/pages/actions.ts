export enum ActionTypes {
  CHANGE_PAGE = '[Catalog/items] Load items',
}

// Change page

export type TChangePage = {
  type: ActionTypes.CHANGE_PAGE;
  page: number;
};

export const changePage = (page: number): TChangePage => {
  return { type: ActionTypes.CHANGE_PAGE, page, };
};

export type ActionsAll = TChangePage;
