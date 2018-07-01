import React from 'react';
import { TreeItemType } from './types';
import TreeIcon, { TreeIconPosition, getPosition } from './TreeIcon';
import { treeClasses } from './index.style';
import { join } from 'util/helpers';
import TreeLineBase from 'ui/Tree/TreeLineBase';

type Props = {
  data: TreeItemType[];
  onClick: (id: string) => void;
};
type State = {
  data: {[key: string]: boolean};
};

class Tree extends React.PureComponent<Props, State> {
  state = { data: {} as {[key: string]: boolean} }

  onTreeClick = (event: any) => {
    try {
      const [type, id] = event.target.id.split('_');
      if (type === 'caption') {
        this.props.onClick(id);
      } else {
        // TODO Ramda or Immutable
        this.setState({
          data: {
            ...this.state.data,
            [id]: !this.state.data[id],
          }
        });
      }
    } catch (e) {
      // ignored
    }
  }

  getItems = (items: TreeItemType[]): any => {
    if (!items || items.length === 0) { return null }
    const lastIndex = items.length - 1;
    return (
      <ul className={treeClasses.container} onClick={this.onTreeClick}>
        {items.map((item, index) => { return this.getSubItems(item, getPosition(index, lastIndex)) })}
      </ul>
    );
  }

  getSubItemCaption = (item: TreeItemType) =>
    <span id={`caption_${item.id}`} className={treeClasses.subItem}>{item.name}</span>

  hasNoChilds = (item: TreeItemType) => !item.items || item.items.length === 0

  getSubItems = (item: TreeItemType, position: TreeIconPosition): any => {
    if (this.hasNoChilds(item)) {
      return (
        <li key={item.id}>
          <div className={treeClasses.subItemFlexContainer}>
            <TreeLineBase position={position} />
            <span className={treeClasses.vert} />
            {this.getSubItemCaption(item)}
          </div>
        </li>
      );
    }

    const isShow = this.state.data[item.id];
    const lastIndex = item.items.length - 1;
    //style={{ marginTop: '4px' }}
    return (
      <li key={item.id} style={{ position: 'relative' }}>
        <div style={{ display: 'flex' }}>
          <TreeIcon item={item} isShow={isShow} position={position} className={treeClasses.icon} />
          {this.getSubItemCaption(item)}
        </div>
        <TreeLineBase isVertical={true} />
        <ul className={join(treeClasses.subContainer, isShow && treeClasses.subItemShow || '')}>
          {item.items.map((item, index) => { return this.getSubItems(item, getPosition(index, lastIndex)) })}
        </ul>
      </li>
    );
  }

  render() {
    const { data } = this.props;
    if (!data || !data.length) { return null }
    return this.getItems(data);
  }
}
export default Tree;
