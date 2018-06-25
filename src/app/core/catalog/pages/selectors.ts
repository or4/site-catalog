import { AppState } from 'store/reducers';
import { selectItemsByCategory } from 'core/catalog/items/selectors';

export const selectPage = (state: AppState) => state.pages.page;
export const selectTotalPages = (state: AppState, category: string) => selectItemsByCategory(state, category).length;
