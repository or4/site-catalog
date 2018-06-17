import { TCategory } from 'core/catalog/categories/reducer';

type TCategoryServer = {
  id: string;
  parent_id: string;
  order: string;
  is_default: string;
  name: string;
  id1: string;
  image: string;
  description: string;
};


export const convertCategories = (data: TCategoryServer[]) =>
  data.map((category: TCategoryServer) => ({
    id: Number(category.id),
    idVirtual: category.id1,
    isDefault: Number(category.is_default),
    name: category.name,
    order: Number(category.order),
    parentId: Number(category.parent_id),

    image: category.image,
    description: category.description,
  })) as TCategory[];

export const sortCategories =
  (data: TCategory[]) => data.sort(
    (a: TCategory, b: TCategory) => a.order - b.order
  );


// this method separate by parentId
// create array of categories arrays, where key of main array is parentId
// then you have array where keys is categoryId, and value is array of sub categories
const getSeparatedData = (data: TCategory[]) =>
  data.reduce(
    (acc: any, category: TCategory) => {
      if (typeof acc[category.parentId] === 'undefined') {
        acc[category.parentId] = [];
      }
      acc[category.parentId].push(category);
      return acc;
    }, []) as Array<TCategory[]>;

// return upper level categories
const getParents0 = (data: TCategory[]) => data.filter((category: TCategory) => category.parentId === 0);



export const separateData = (data: TCategory[]) => {

  const separated = getSeparatedData(data);
  const parents0 = getParents0(data);

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
