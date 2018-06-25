import { AppState } from 'store/reducers';
import { selectItemsByCategory } from 'core/catalog/items/reducer';
import { selectAmountItems } from 'core/settings/amountItems/reducer';
import { amountItems } from 'core/settings/amountItems/common';

export const selectPage = (state: AppState) => state.pages.page;

export const selectItemsByPage = (state: AppState, category: string) => {
  const items = selectItemsByCategory(state, category);
  const totalItems = items.length;
  const page = selectPage(state);

  const amountItemsPerPageKey = selectAmountItems(state);
  if (amountItemsPerPageKey === 'all') {
    return items;
  }
  const amountItemsPerPageValue =  amountItems[amountItemsPerPageKey];
  return items.slice((page - 1) * amountItemsPerPageValue, page * amountItemsPerPageValue);
};