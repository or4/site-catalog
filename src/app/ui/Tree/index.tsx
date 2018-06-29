import React from 'react';
import { testDataForTree as data, TreeItemType } from './types';
import TreeItem from './TreeItem';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClassess = () => {
  const container = {
    listStyle: 'none',

    '& ul': {
      listStyle: 'none' as 'none',
    }
  };
  const icon = {
  };
  return {
    container,
    icon,
  };
};

const { classes } = jss.createStyleSheet(getClassess()).attach();


type Props = {
};
type State = {
};


class Tree extends React.PureComponent<Props, State> {
  getItems = (items: TreeItemType[]): any => {
    if (!items || items.length === 0) {
      return null;
    }
    return (
      <ul className={classes.container}>
        {items.map(item => <TreeItem key={item.id} item={item} />)}
      </ul>
    );
  }

  render() {
    //const { data } = this.props;
    if (!data || !data.length) { return null }
    return this.getItems(data);
  }
}
export default Tree;
