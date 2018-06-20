import { TCategoryServer, TCategory } from 'core/catalog/categories/types';


/**
 *  Private function, Return upper level or 0-level categories
 */
const filterParents0 =
  (data: TCategory[]) =>
    data.filter((category: TCategory) => category.parentId === 0);



// this method separate by parentId
// create array of categories arrays, where key of main array is parentId
// then you have array where keys is categoryId, and value is array of sub categories
const convertToObjKeyParentId = (data: TCategory[]) =>
  data.reduce(
    (acc: Array<TCategory[]>, category: TCategory) => {
      if (!acc[category.parentId]) { acc[category.parentId] = [] }
      acc[category.parentId].push(category);
      return acc;
    }, []);



export const separateData = (data: TCategory[]) => {

  const separated = convertToObjKeyParentId(data);
  const parents0 = filterParents0(data);

  const processSub = (item: TCategory): TCategory[] => {
    // get subItems for item
    const subItems = separated[item.id];
    if (typeof subItems === 'undefined') {
      return [];
    }

    return subItems.map((item: TCategory) => {
      return {
        ...item,
        subItems: processSub(item),
      };
    });
  };

  const result = parents0.map((item: TCategory) => {
    return {
      ...item,
      subItems: processSub(item)
    };
  });

  return result;
};
