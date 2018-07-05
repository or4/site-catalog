import React from 'react';
import { treeIconBase64 } from 'ui/icons/base64';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
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
    backgroundImage: `url(${treeIconBase64})`,
    backgroundPosition: '-56px -38px',
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();


type Props = {
};
type State = {
};

class TreeIconCorner extends React.PureComponent<Props, State> {
  render() {
    return <span className={classes.container} />;
  }
}
export { TreeIconCorner };
