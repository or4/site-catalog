import React from 'react';
import { treeIconBase64 } from 'ui/icons/base64';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const classes = {
    container: {
      lineHeight: '16px',
      marginRight: '2px',
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
      backgroundPosition: '-66px -21px',
      width: '6px',
      maxWidth: '6px',
      minWidth: '6px',
      marginLeft: '10px',
    },
  };

  return classes;
};

const { classes } = jss.createStyleSheet(getClasses()).attach();


type Props = {
};
type State = {
};

class TreeIconHyphen extends React.PureComponent<Props, State> {
  render() {
    return <span className={classes.container} />;
  }
}
export { TreeIconHyphen };
