import React from 'react';
import { TreeItemType, TreePosition } from '../types';
import { TreeIconCorner, TreeIconHyphen, TreeIconLine } from '../icons';
import { ElementCaption } from './ElementCaption';

import jss from 'jss';
import preset from 'jss-preset-default';
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
};
type State = {
};

class ElementWithoutChild extends React.PureComponent<Props, State> {
  render() {
    const { item, position } = this.props;
    if (position === 'last') {
      return (
        <li key={item.idKey}>
          <div className={classes.subItemFlexContainer}>
            <TreeIconCorner />
            <ElementCaption item={item} />
          </div>
        </li>
      );
    }

    return (
      <li key={item.idKey}>
        <div className={classes.subItemFlexContainer}>
          <TreeIconLine />
          <TreeIconHyphen />
          <ElementCaption item={item} />
        </div>
      </li>
    );
  }
}
export { ElementWithoutChild };
