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
};
type State = {
};


class TreeItem extends React.PureComponent<Props, State> {
  getSubItems = (item: TreeItemType): any => {
    if (!item.items || item.items.length === 0) {
      return (
        <li key={item.id}>
          <a href={`/catalog/${item.id}`}>
            {item.name}
          </a>
        </li>
      );
    }
    return (
      <li key={item.id}>
        <TreeIconBase treeIconType="plus" />
        <a href={`/catalog/${item.id}`}>
          {item.name}
        </a>
        <ul className={classes.subContainer}>
          {item.items.map(item => this.getSubItems(item))}
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