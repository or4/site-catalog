import React from 'react';
import { TreeItemType } from '../types';
import { ElementWithoutChild } from './ElementWithoutChild';
import { ElementWithChild } from 'ui/Tree/TreeItem/ElementWithChild';
import { PositionType } from 'utils';

type Props = {
  item: TreeItemType;
  itemsState: any;
  position: PositionType;
};
type State = {
};

const hasNoChilds = (item: TreeItemType) => !item.items || !item.items.length;

class TreeItem extends React.PureComponent<Props, State> {
  render(): any {
    const { item, position, itemsState } = this.props;

    if (hasNoChilds(item)) {
      return <ElementWithoutChild item={item} position={position} />;
    }

    return (
      <ElementWithChild
        item={item}
        itemsState={itemsState}
        isShow={itemsState[item.id]}
        position={position}
      />
    );
  }
}
export { TreeItem };
