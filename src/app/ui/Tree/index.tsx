import React from 'react';
import { TreeItemType } from './types';
import TreeItem from './TreeItem';
import TreeIconBase from './TreeIconBase';
import { treeClasses } from './index.style';

type Props = {
  data: TreeItemType[];
};
type State = {
  data: {[key: string]: Boolean};
};

class Tree extends React.PureComponent<Props, State> {
  state = { data: {} as {[key: string]: Boolean} }

  onTreeClick = (event: any) => {
    try {
      const [type, id] = event.target.id.split('_');
      console.log(`onTreeClick type=${type}, id=${id}`);

      if (type === 'caption') {
        console.log(`go to route ${`/catalog/id`}`);
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
    return (
      <ul className={treeClasses.container} onClick={this.onTreeClick}>
        {items.map(
          item => {
            return this.getSubItems(item);
          }
        )}
      </ul>
    );
  }

  getSubItems = (item: TreeItemType): any => {
    if (!item.items || item.items.length === 0) {
      return (
        <li key={item.id}>
          <span id={`caption_${item.id}`}>{item.name}</span>
        </li>
      );
    }
    return (
      <li key={item.id}>
        <TreeIconBase item={item} treeIconType={this.state.data[item.id] ? 'minus' : 'plus'} />
        <span id={`caption_${item.id}`}>{item.name}</span>
        <ul className={treeClasses.subContainer}>
          {item.items.map(item => {
            return this.getSubItems(item);
          })}
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
