import React from 'react';
import { theming } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    alignItems: 'center' as 'center',
    cursor: 'pointer',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center' as 'center',
    left: '0',
    position: 'fixed' as 'fixed',
    top: '0',
    width: '100%',
    zIndex: 1,

    ...theming('ui-overlay'),
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  overlay: boolean;
  onClose: () => void;
};
type State = {
};

class Overlay extends React.PureComponent<Props, State> {
  render() {
    const { overlay, onClose } = this.props;
    if (!overlay) { return null }

    return (
      <div className={classes.container} onClick={onClose}>
        {this.props.children}
      </div>
    );
  }
}
export default Overlay;
