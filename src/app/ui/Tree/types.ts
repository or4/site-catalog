
export type TreeItemType = {
  id: string;
  idKey: string;
  name: string;
  items?: TreeItemType[];
};

export type TreePosition = 'first' |'middle' |'last';
