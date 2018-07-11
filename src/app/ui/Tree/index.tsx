import React from 'react';
import * as R from 'ramda';

import { TreeItemType } from './types';
import { TreeItem } from './TreeItem';
import { getPosition } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClassess = {
  container: {
    listStyle: 'none',
    margin: '0',
    padding: '0',

    '& ul': {
      listStyle: 'none' as 'none',
    }
  }
};

const { classes } = jss.createStyleSheet(rawClassess).attach();

type Props = {
  data: TreeItemType[];
  onClick: (id: string) => void;
  isExpand?: boolean;
};
type State = {
  itemsState: {[key: string]: boolean};
  isExpand?: boolean;
};

class Tree extends React.PureComponent<Props, State> {
  state = { itemsState: {} as {[key: string]: boolean} }

  static getDerivedStateFromProps(props: Props, prevState: State) {
    if (props.isExpand !== prevState.isExpand) {
      if (props.isExpand) {
        return { isExpand: props.isExpand, itemsState: { 1: true }};
      }
      return { isExpand: props.isExpand };
    }
    return null;
  }


  onTreeClick = (event: any) => {
    try {
      const [type, id] = event.target.id.split('_');
      if (type === 'tree-caption') {
        this.props.onClick(id);
      } else if (type === 'tree-icon') {
        console.log('id', id);
        this.setState(R.assocPath(['itemsState', id], !this.state.itemsState[id], this.state));
      }
    } catch (e) {
      // ignored
    }
  }

  render() {
    const { data: items } = this.props;
    if (!items || !items.length) { return null }

    const { itemsState } = this.state;

    const lastIndex = items.length - 1;
    return (
      <ul className={classes.container} onClick={this.onTreeClick}>
        {items.map(
          (item, index) => <TreeItem key={item.idKey} itemsState={itemsState} item={item} position={getPosition(index, lastIndex)} />
        )}
      </ul>
    );
  }
}
export { Tree };
