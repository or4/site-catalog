import React from 'react';
import { join } from 'util/helpers';
import { TreeItemType, TreePosition } from '../types';
import { getPosition, isFirst } from '../util';
import { TreeIconLine, TreeIconSign } from '../icons';
import { ElementCaption } from './ElementCaption';
import { TreeItem } from './index';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    position: 'relative' as 'relative'
  },
  captionContainer: {
    display: 'flex',
  },
  subItemsContainer: {
    display: 'none',
    margin: '0',
    overflow: 'hidden',
    paddingLeft: '10px',
    position: 'relative' as 'relative',
    zIndex: '1000' as any,
  },
  subItemsShow: {
    display: 'block',
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  item: TreeItemType;
  isShow: boolean;
  itemsState: any;
  position: TreePosition;
};
type State = {
};

class ElementWithChild extends React.PureComponent<Props, State> {
  render() {
    const { isShow, item, itemsState, position, } = this.props;
    const subItems = item.items;

    return (
      <li key={item.id} className={classes.container}>

        <div className={classes.captionContainer}>
          <TreeIconSign item={item} isShow={isShow} />
          <ElementCaption item={item} />
        </div>

        {position !== 'last' ? <TreeIconLine withMargin={isFirst(position)} /> : null}

        <ul className={join(classes.subItemsContainer, isShow ? classes.subItemsShow : '')}>
          {subItems.map((item, index, arr) =>
            <TreeItem
              key={item.id}
              item={item}
              itemsState={itemsState}
              position={getPosition(index, arr.length - 1)}
            />
          )}
        </ul>
      </li>
    );
  }
}
export { ElementWithChild };
