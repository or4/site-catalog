import { AppState } from 'store/reducers';
import { selectItemsByCategory } from 'core/catalog/items/selectors';
import { selectAmountItems } from 'core/settings/amountItems/reducer';
import { amountItems } from 'core/settings/amountItems/common';

export const selectPage = (state: AppState) => state.pages.page;
export const selectTotalPages = (state: AppState, category: string) => {

  const totalItems = selectItemsByCategory(state, category).length;
  const perPageKey = selectAmountItems(state);
  if (perPageKey === 'all') {
    return 1;
  }
  const totalPages = Math.ceil(totalItems / amountItems[perPageKey]);
  return totalPages;
};
