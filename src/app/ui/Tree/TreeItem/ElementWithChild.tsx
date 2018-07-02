import React from 'react';
import { TreeItemType, TreePosition } from '../types';
import { ElementCaption } from './ElementCaption';
import { join } from 'util/helpers';

import { treeClasses } from '../index.style';
import { getPosition, isFirst } from '../util';
import { TreeIconLine, TreeIconSign } from '../icons';


import jss from 'jss';
import preset from 'jss-preset-default';
import { TreeItem } from 'ui/Tree/TreeItem';
jss.setup(preset());

const rawClasses = {
  subItemFlexContainer: {
    display: 'flex',
    position: 'relative' as 'relative',
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  item: TreeItemType;
  position: TreePosition;
  isShow: boolean;
  itemsState: any;
};
type State = {
};

class ElementWithChild extends React.PureComponent<Props, State> {
  render() {
    const { item, position, isShow, itemsState } = this.props;

    return (
      <li key={item.id} style={{ position: 'relative' }}>

        <div style={{ display: 'flex' }}>
          <TreeIconSign item={item} isShow={isShow} className={treeClasses.icon} />
          <ElementCaption item={item} />
        </div>

        {position === 'last' ? null : <TreeIconLine withMargin={isFirst(position)} />}


        <ul className={join(treeClasses.subContainer, isShow && treeClasses.subItemShow || '')}>
          {item.items.map((item, index, arr) =>
            <TreeItem
              key={item.id}
              item={item}
              position={getPosition(index, arr.length - 1)}
              itemsState={this.props.itemsState}
            />
          )}
        </ul>
      </li>
    );
  }
}
export { ElementWithChild };
