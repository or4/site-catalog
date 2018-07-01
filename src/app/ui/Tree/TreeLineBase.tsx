import React from 'react';
import { treeIconBase64, treeLineBase64 } from 'ui/icons/base64';

const positions = {
  'triangle': '-56px -18px',
  'corner': '-56px -36px',
};

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
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
    },

    vertical: {
      background: `url(${treeLineBase64}) 0 0 repeat-y`,
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

const { classes } = jss.createStyleSheet(getClassess()).attach();

type TreeIconType = 'triangle' | 'vertical' | 'corner';

type Props = {
  treeIconType?: TreeIconType;
  isLast?: boolean;
};
type State = {
};

class TreeLineBase extends React.PureComponent<Props, State> {
  render() {
    const { isLast } = this.props;

    return (
      <span className={join(classes.container, classes[isLast ? 'corner' : 'triangle'])} />
    );
  }
}
export default TreeLineBase;
