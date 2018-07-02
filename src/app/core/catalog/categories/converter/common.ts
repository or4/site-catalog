import { TCategoryServer, TCategory } from 'core/catalog/categories/types';

/**
 * Convert from server structure to client structure
 */
export const convertToClientData = (data: TCategoryServer[]) =>
  data.map((category: TCategoryServer) => ({
    id: category.id1,
    idVirtual: Number(category.id),
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

