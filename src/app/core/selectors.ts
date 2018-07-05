import { selectItemsByPage } from 'core/catalog/items/selectors';
import { selectCategory, selectCategoryCaption } from 'core/catalog/categories/selectors';
import { selectPage, selectTotalPages } from 'core/catalog/pages/selectors';
import { selectAmountItems } from 'core/settings/amountItems/reducer';

export {
  selectItemsByPage,
  selectCategory, selectCategoryCaption,
  selectPage, selectTotalPages,
  selectAmountItems,
};