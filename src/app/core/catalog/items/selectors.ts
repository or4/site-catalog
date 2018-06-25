import { AppState } from 'store/reducers';
import { selectAmountItems } from 'core/settings/amountItems/reducer';
import { amountItems } from 'core/settings/amountItems/common';
import { selectPage } from 'core/catalog/pages/selectors';

export const selectItems = (state: AppState) => state.items.data;

export const selectItemsByCategory = (state: AppState, category: string) =>
  selectItems(state).filter(item => item.category.indexOf(category) >= 0);


export const selectItemsByPage = (state: AppState, category: string) => {
  const items = selectItemsByCategory(state, category);
  const page = selectPage(state);

  const perPageKey = selectAmountItems(state);
  if (perPageKey === 'all') { return items }

  const perPageValue =  amountItems[perPageKey];
  return items.slice((page - 1) * perPageValue, page * perPageValue);
};