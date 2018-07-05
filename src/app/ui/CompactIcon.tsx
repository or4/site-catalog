import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    display: 'none',
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'fixed' as 'fixed',
    cursor: 'pointer',

    // borderTopRightRadius: '20px',
    // borderBottomRightRadius: '20px',

    // borderRadius: '20px',
    // bottom: '40px',
    // height: '40px',
    // right: '40px',
    // width: '40px',

    borderTopLeftRadius: '100px',
    bottom: '0px',
    height: '100px',
    right: '0px',
    width: '100px',


    '&:hover': {
      background: 'rgba(0, 0, 0, 0.4)',
    }
  },
};

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;


type Props = {
  onClick: () => void;
};
type State = {
};

/**
 * Button for show left, right sidebars
 * now it not designed
 */
export class CompactIcon extends React.PureComponent<Props, State> {
  render() {
    //const {  } = this.props;
    return (
      <div className={classes.container}>
        &nbsp;
      </div>
    );
  }
}
