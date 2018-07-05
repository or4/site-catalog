import { AppState, TCategory } from 'core/types';
import { selectAmountItems } from 'core/settings/amountItems/reducer';
import { amountItems } from 'core/settings/amountItems/common';
import { selectPage } from 'core/catalog/pages/selectors';
import { log } from 'utils';

export const selectItems = (state: AppState) => state.items.data;

export const selectItemsByCategory = (state: AppState, category: string) => {
  if (category === '0') {
    return selectItems(state);
  }

  return selectItems(state).filter(item => item.category.indexOf(category) >= 0);
};

export const selectItemsByPage = (state: AppState, category: TCategory) => {
  if (!category) { return [] }

  log('category.id', category.id);
  const items = selectItemsByCategory(state, category.id);
  const page = selectPage(state);

  const perPageKey = selectAmountItems(state);
  if (perPageKey === 'all') { return items }

  const perPageValue =  amountItems[perPageKey];
  return items.slice((page - 1) * perPageValue, page * perPageValue);
};