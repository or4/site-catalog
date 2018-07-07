import React from 'react';
import { treeLineBase64 } from 'ui/icons/base64';
import { join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    background: `url(${treeLineBase64}) 0 0 repeat-y`,
    backgroundColor: 'transparent',
    backgroundAttachment: 'scroll',
    border: '0 none',
    cursor: 'pointer',
    display: 'inline-block',
    height: 'calc(100%)',
    left: '0',
    lineHeight: '16px',
    marginRight: '2px',
    minWidth: '16px',
    verticalAlign: 'middle',
    outline: 'none',
    position: 'absolute' as 'absolute',
    top: '0',
    width: '16px',
    zIndex: '999' as any,
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
