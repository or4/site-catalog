import React from 'react';
import { treeIconBase64 } from 'ui/icons/base64';
import { join } from 'util/helpers';
import { TreeItemType } from 'ui/Tree/types';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClassess = () => {
  const classes = {
    container: {
      lineHeight: '16px',
      marginRight: '2px',
      width: '16px',
      height: '16px',
      display: 'inline-block',
      verticalAlign: 'middle',
      border: '0 none',
      cursor: 'pointer',
      outline: 'none',
      backgroundColor: 'transparent',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      backgroundImage: `url(${treeIconBase64})`,
    }
  };

  return classes;
};

const { classes } = jss.createStyleSheet(getClassess()).attach();

type TreeIconType = 'minus' | 'plus';
export type TreeIconPosition = 'first' |'middle' |'last';

const positionsX = {
  'minus': '-93px',
  'plus': '-75px',
};

// const positionsY = {
//   'first': '-2px',
//   'middle': '-20px',
//   'last': '-38px',
// };

const positionsY = {
  'first': '-56px',
  'middle': '-56px',
  'last': '-56px',
};

type Props = {
  item: TreeItemType;
  isShow: boolean;
  position: TreeIconPosition;
};
type State = {
};

export const getPosition = (index: number, lastIndex: number): TreeIconPosition => {
  const firstIndex = 0;
  if (index === firstIndex) {
    return 'first';
  }
  if (index === lastIndex) {
    return 'last';
  }
  return 'middle';
};

class TreeIcon extends React.PureComponent<Props, State> {
  getStyle = () => {
    const { isShow, position } = this.props;
    const type: TreeIconType = isShow ? 'minus' : 'plus';

    return {
      backgroundPosition: `${positionsX[type]} ${positionsY[position]}`
    };
  }

  render() {
    const { item, isShow } = this.props;
    const style = this.getStyle();
    return (
      <span
        className={join(classes.container)}
        id={`icon_${item.id}`}
        style={style}
      />
    );
  }
}
export default TreeIcon;
