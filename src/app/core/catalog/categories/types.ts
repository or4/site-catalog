
export type TCategoryServer = {
  id: string;
  parent_id: string;
  order: string;
  is_default: string;
  name: string;
  id1: string;
  image: string;
  description: string;
};


export type TCategory = {
  id: number;
  idVirtual: string;
  isDefault: number;
  name: string;
  order: number;
  parentId: number;

  image: string;
  description: string;

  subItems?: TCategory[];
};


export type CategoryIndexedById = {[key: string]: TCategory};
