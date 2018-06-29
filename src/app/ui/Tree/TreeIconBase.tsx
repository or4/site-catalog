import React from 'react';
import { treeIconBase64 } from 'ui/icons/base64';

const positions = {
  'minus': '-93px -56px',
  'plus': '-75px -56px',
};

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
import { TreeItemType } from 'ui/Tree/types';
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
    },
    minus: {
      backgroundPosition: positions['minus'],
    },
    plus: {
      backgroundPosition: positions['plus'],
    }
  };

  return classes;
};

const { classes } = jss.createStyleSheet(getClassess()).attach();


type TreeIconType = 'minus' | 'plus';

type Props = {
  item: TreeItemType;
  treeIconType: TreeIconType;
};
type State = {
};

class TreeIconBase extends React.PureComponent<Props, State> {
  getStyle(type: TreeIconType) {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const { item, treeIconType } = this.props;

    return (
      <span id={`icon_${item.id}`} className={join(classes.container, classes[treeIconType])} />
    );
  }
}
export default TreeIconBase;
