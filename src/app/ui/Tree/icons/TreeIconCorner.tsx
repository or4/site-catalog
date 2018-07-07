import React from 'react';
import { treeIconBase64 } from 'ui/icons/base64';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundImage: `url(${treeIconBase64})`,
    backgroundPosition: '-56px -38px',
    border: '0 none',
    display: 'inline-block',
    height: '16px',
    lineHeight: '16px',
    marginRight: '2px',
    minWidth: '16px',
    outline: 'none',
    verticalAlign: 'middle',
    width: '16px',
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
