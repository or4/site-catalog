import React from 'react';
import { TreeItemType } from './types';
import TreeItem from './TreeItem';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getRawClassess = () => {
  const container = {
    listStyle: 'none',
    margin: '0',
    padding: '0',

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

const { classes } = jss.createStyleSheet(getRawClassess()).attach();


type Props = {
  data: TreeItemType[];
};
type State = {
};


class Tree extends React.PureComponent<Props, State> {
  data = {} as {[key: string]: JSX.Element};
  onTreeClick = (event: any) => {
    try {
      const [type, id] = event.target.id.split('_');


      (this.data[id] as any).test();

      console.log(`onTreeClick type=${type}, id=${id}`);
      // console.log('this.data', this.data);
      if (type === 'caption') {
        console.log(`go to route ${`/catalog/id`}`);
      } else {
        // ignored
      }
    } catch (e) {
      // ignored
    }
  }

  setItemToIndexedObj = (item: TreeItemType, component: JSX.Element): JSX.Element => {
    this.data[item.id] = component;
    // this.data[item.id] = myref;
    return component;
  }


  getItems = (items: TreeItemType[]): any => {
    if (!items || items.length === 0) { return null }
    return (
      <ul className={classes.container} onClick={this.onTreeClick}>
        {items.map(
          item => this.setItemToIndexedObj(item, <TreeItem key={item.id} item={item} setItemToIndexedObj={this.setItemToIndexedObj} />)
        )}
      </ul>
    );
  }

  render() {
    const { data } = this.props;
    if (!data || !data.length) { return null }
    return this.getItems(data);
  }
}
export default Tree;
