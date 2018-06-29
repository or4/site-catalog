import React from 'react';
import TreeIconBase from './TreeIconBase';
import { TreeItemType } from './types';
// import { Link } from 'react-router-dom';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClassess = () => {
  const subContainer = {
    'display': 'block',
  };
  const icon = {
  };
  return {
    subContainer,
    icon,
  };
};

const { classes } = jss.createStyleSheet(getClassess()).attach();

type Props = {
  item: TreeItemType;
  setItemToIndexedObj: (item: TreeItemType, component: JSX.Element) => JSX.Element;
};
type State = {
};


class TreeItem extends React.PureComponent<Props, State> {
  test = () => {
    console.log('test');
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
        <TreeIconBase item={item} treeIconType="plus" />
        <span id={`caption_${item.id}`}>{item.name}</span>
        <ul className={classes.subContainer}>
          {item.items.map(item =>
            this.props.setItemToIndexedObj(item, <TreeItem key={item.id} item={item} setItemToIndexedObj={this.props.setItemToIndexedObj} />)
          )}
        </ul>
      </li>
    );
  }

  render() {
    const { item } = this.props;
    return this.getSubItems(item);
  }
}
export default TreeItem;



// <TreeIconBase treeIconType="minus" />
// <TreeIconBase treeIconType="plus" />

// <TreeLineBase treeIconType="triangle" />
// <TreeLineBase treeIconType="vertical" />
// <TreeLineBase treeIconType="corner" />