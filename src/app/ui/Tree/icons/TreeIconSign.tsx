import React from 'react';
import { treeIconBase64 } from 'ui/icons/base64';
import { join } from 'util/helpers';
import { TreeItemType } from 'ui/Tree/types';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    border: '0 none',
    backgroundAttachment: 'scroll',
    backgroundColor: 'transparent',
    backgroundImage: `url(${treeIconBase64})`,
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    display: 'inline-block',
    height: '16px',
    lineHeight: '16px',
    marginRight: '2px',
    minWidth: '16px',
    outline: 'none',
    width: '16px',
    verticalAlign: 'middle',
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type TreeIconType = 'minus' | 'plus';

const positionsX = {
  'minus': '-93px',
  'plus': '-75px',
};

const positionsY = '-56px';

type Props = {
  item: TreeItemType;
  isShow: boolean;
  className?: string;
};
type State = {
};

class TreeIconSign extends React.PureComponent<Props, State> {
  getStyle = () => {
    const { isShow } = this.props;
    const type: TreeIconType = isShow ? 'minus' : 'plus';

    return {
      backgroundPosition: `${positionsX[type]} ${positionsY}`
    };
  }

  render() {
    const { item, isShow, className } = this.props;
    const style = this.getStyle();
    return (
      <span
        className={join(classes.container, className || '')}
        id={`tree-icon_${item.id}`}
        style={style}
      />
    );
  }
}
export { TreeIconSign };
