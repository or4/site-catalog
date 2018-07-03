import { TCategoryServer, TCategory } from 'core/catalog/categories/types';

const corrected = (id1: string, id: string) => {
  if (id === '82') return '0'; // все товары
  if (id === '270') return '27'; // Трансмиссия 27
  if (id === '101') return '2712'; // Прочее 27
  if (id === '350') return '47'; // Муфты
  return id1;
};

/**
 * Convert from server structure to client structure
 */
export const convertToClientData = (data: TCategoryServer[]) =>
  data.map((category: TCategoryServer) => ({
    id: corrected(category.id1, category.id),
    idKey: Number(category.id),
    isDefault: Number(category.is_default),
    name: category.name,
    order: Number(category.order),
    parentId: Number(category.parent_id),

    image: category.image,
    description: category.description,
  })) as TCategory[];


/**
 * Simple sort by prop order
 */
export const sort =
  (data: TCategory[]) => data.sort(
    (a: TCategory, b: TCategory) => a.order - b.order
  );

