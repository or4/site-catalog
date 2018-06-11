import { TItem } from 'core/catalog/items/reducer';

type TItemServer = {
  id: string;
  parent_id: string;
  order: string;
  is_default: string;
  name: string;
  id1: string;
  image: string;
  description: string;
};

const convertToClientData = (data: TItemServer[]) =>
  data.map((item: TItemServer) => ({
    id: Number(item.id),
    idVirtual: item.id1,
    isDefault: Number(item.is_default),
    name: item.name,
    order: Number(item.order),
    parentId: Number(item.parent_id),

    image: item.image,
    description: item.description,
  })) as TItem[];

const sortData = (data: TItem[]) => data.sort((a: TItem, b: TItem) => a.order - b.order);

// this method separate by parentId
// create array of items arrays, where key of main array is parentId
// then you have array where keys is itemId, and value is array of sub items
const separateData = (data: TItem[]) =>
  data.reduce(
    (acc: any, item: TItem) => {
      if (typeof acc[item.parentId] === 'undefined') {
        acc[item.parentId] = [];
      }
      acc[item.parentId].push(item);
      return acc;
    }, []) as Array<TItem[]>;

// return upper level items
const getParents0 = (data: TItem[]) => data.filter((item: TItem) => item.parentId === 0);

export const convertItems = (data: TItemServer[]) => {

  const converted = convertToClientData(data);
  const sorted = sortData(converted);
  const separated = separateData(sorted);
  const parents0 = getParents0(sorted);

  const processSub = (item: TItem): TItem[] => {
    // get subItems for item
    const subItems = separated[item.id];
    if (typeof subItems === 'undefined') {
      return [];
    }

    return subItems.map((item: TItem) => {
      return {
        ...item,
        subItems: processSub(item),
      };
    });
  };

  const result = parents0.map((item: TItem) => {
    return {
      ...item,
      subItems: processSub(item)
    };
  });

  return result;
};
