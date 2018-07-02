import React from 'react';
import { TreeItemType, TreePosition } from 'ui/Tree/types';
import { join } from 'util/helpers';
import { treeClasses } from 'ui/Tree/index.style';
import { getPosition, isFirst } from 'ui/Tree/util';
import { TreeIconCorner } from 'ui/Tree/TreeIconCorner';
import { TreeIconLine } from 'ui/Tree/TreeIconLine';
import { TreeIconSign } from 'ui/Tree/TreeIconSign';
import { TreeIconHyphen } from 'ui/Tree/TreeIconHyphen';

type Props = {
  item: TreeItemType;
  position: TreePosition;
  state: any;
};
type State = {
};

class TreeItem extends React.PureComponent<Props, State> {
  hasNoChilds = (item: TreeItemType) => !item.items || !item.items.length

  getSubItemCaption = (item: TreeItemType) =>
    <span id={`tree-caption_${item.id}`} className={treeClasses.subItem}>{item.name}</span>


  render(): any {
    const { item, position } = this.props;

    if (this.hasNoChilds(item)) {
      return (
        <li key={item.id}>
          <div className={treeClasses.subItemFlexContainer}>

            {position === 'last' ? <TreeIconCorner /> : <TreeIconHyphen />}
            {position === 'last' ? null : <span className={treeClasses.vert} />}
            {this.getSubItemCaption(item)}
          </div>
        </li>
      );
    }

    const isShow = this.props.state[item.id];
    const lastIndex = item.items.length - 1;

    return (
      <li key={item.id} style={{ position: 'relative' }}>
        <div style={{ display: 'flex' }}>
          <TreeIconSign item={item} isShow={isShow} className={treeClasses.icon} />
          {this.getSubItemCaption(item)}
        </div>

        {position === 'last' ? null : <TreeIconLine isFirst={isFirst(position)} />}


        <ul className={join(treeClasses.subContainer, isShow && treeClasses.subItemShow || '')}>
          {item.items.map((item, index) =>
            <TreeItem
              key={item.id}
              item={item}
              position={getPosition(index, lastIndex)}
              state={this.props.state}
            />
          )}
        </ul>
      </li>
    );
  }
}
export { TreeItem };
