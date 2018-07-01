import React from 'react';
import { treeIconBase64, treeLineBase64 } from 'ui/icons/base64';

const positions = {
  'triangle': '-56px -21px',
  'corner': '-56px -38px',
};

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
import { TreeIconPosition } from 'ui/Tree/TreeIcon';
jss.setup(preset());

const getClasses = () => {
  const classes = {
    container: {
      lineHeight: '16px',
      marginRight: '2px',
      width: '16px',
      minWidth: '16px',
      height: '16px',
      display: 'inline-block',
      verticalAlign: 'middle',
      border: '0 none',
      cursor: 'pointer',
      outline: 'none',
      backgroundColor: 'transparent',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
    },

    vertical: {
      background: `url(${treeLineBase64}) 0 0 repeat-y`,
      position: 'absolute' as 'absolute',
      top: '16px',
      left: '0',
      zIndex: '999' as any,
      height: 'calc(100% - 23px)',
    },

    triangle: {
      backgroundImage: `url(${treeIconBase64})`,
      backgroundPosition: positions['triangle'],
    },

    corner: {
      backgroundImage: `url(${treeIconBase64})`,
      backgroundPosition: positions['corner'],
    },
  };

  return classes;
};

const { classes } = jss.createStyleSheet(getClasses()).attach();

type TreeIconType = 'triangle' | 'vertical' | 'corner';

type Props = {
  treeIconType?: TreeIconType;
  position?: TreeIconPosition;
  isVertical?: boolean;
};
type State = {
};

class TreeLineBase extends React.PureComponent<Props, State> {
  render() {
    const { position, isVertical } = this.props;
    if (isVertical) {
      return (
        <span className={join(classes.container, classes['vertical'])} />
      );
    }

    return (
      <span className={join(classes.container, classes[position === 'last' ? 'corner' : 'triangle'])} />
    );
  }
}
export default TreeLineBase;
