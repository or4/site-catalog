import React from 'react';
import * as R from 'ramda';

import { TreeItemType } from './types';
import { treeClasses } from './index.style';
import { TreeItem } from './TreeItem';
import { getPosition } from './util';

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
      if (type === 'tree-caption') {
        this.props.onClick(id);
      } else if (type === 'tree-icon') {
        this.setState(R.assocPath(['data', id], !this.state.data[id], this.state));
      }
    } catch (e) {
      // ignored
    }
  }

  render() {
    const { data: items } = this.props;
    if (!items || !items.length) { return null }

    const lastIndex = items.length - 1;
    return (
      <ul className={treeClasses.container} onClick={this.onTreeClick}>
        {items.map((item, index) => {
          return <TreeItem key={item.id} state={this.state.data} item={item} position={getPosition(index, lastIndex)} />;
        })}
      </ul>
    );
  }
}
export default Tree;
