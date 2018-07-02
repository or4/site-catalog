import { TCategoryServer, TCategory, CategoryIndexedById } from 'core/catalog/categories/types';

/**
 * We convert to object to faster access to data
 * another word indexed data
 */
export const convertToIndexedById =
  (data: TCategory[]) => data.reduce((obj: CategoryIndexedById, category: TCategory) => {
    obj[category.id] = category;
    return obj;
  }, {});
