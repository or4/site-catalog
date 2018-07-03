import { TreePosition, TreeItemType } from './types';

export const getPosition = (index: number, lastIndex: number): TreePosition => {
  const firstIndex = 0;
  if (index === lastIndex) { return 'last' }
  if (index === firstIndex) { return 'first' }
  return 'middle';
};

export const isFirst = (position: TreePosition) => position === 'first';
export const isLast = (position: TreePosition) => position === 'last';

export const hasNoChilds = (item: TreeItemType) => !item.items || !item.items.length;
