import { AppState } from 'store/reducers';
import { log } from 'util/logger';

export const selectItems = (state: AppState) => state.items.data;

export const selectItemsByCategory = (state: AppState, category: string) =>
  selectItems(state).filter(item => item.category.indexOf(category) >= 0);


// Counting pages from 1
export const selectItemsPage =
  (state: AppState, category: string, limit: number, page: number) => {
    const all = selectItemsByCategory(state, category);

    const output = {
      data: all.slice((page - 1) * limit, page * limit),
      limit,
      page,
      total: all.length,
      totalPages: Math.ceil(all.length / limit),
    };
    log('selectItemsPage', all, output);
    return output;
  };

