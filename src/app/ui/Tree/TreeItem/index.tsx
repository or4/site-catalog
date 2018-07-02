import React from 'react';
import { TreeItemType, TreePosition } from '../types';
import { hasNoChilds } from '../util';
import { ElementWithoutChild } from './ElementWithoutChild';
import { ElementWithChild } from 'ui/Tree/TreeItem/ElementWithChild';

type Props = {
  item: TreeItemType;
  itemsState: any;
  position: TreePosition;
};
type State = {
};

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
