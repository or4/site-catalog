import React from 'react';
import { treeLineBase64 } from 'ui/icons/base64';
import { join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    lineHeight: '16px',
    marginRight: '2px',
    width: '16px',
    minWidth: '16px',
    display: 'inline-block',
    verticalAlign: 'middle',
    border: '0 none',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: 'transparent',
    backgroundAttachment: 'scroll',

    background: `url(${treeLineBase64}) 0 0 repeat-y`,
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    zIndex: '999' as any,
    height: 'calc(100%)',
  },
  withMargin: {
    top: '6px',
    height: 'calc(100% - 6px)'
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  withMargin?: boolean;
};
type State = {
};

class TreeIconLine extends React.PureComponent<Props, State> {
  render() {
    const { withMargin } = this.props;
    return <span className={join(classes.container, withMargin ? classes.withMargin : '')} />;
  }
}
export { TreeIconLine };
