import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    background: 'rgba(0, 0, 0, 0.2)',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    cursor: 'pointer',
    height: '40px',
    left: '0',
    position: 'fixed' as 'fixed',
    bottom: '50%',
    width: '20px',

    '&:hover': {
      background: 'rgba(0, 0, 0, 0.4)',
    }
  };
  return {
    container,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;


type Props = {
  onClick: () => void;
};
type State = {
};


class CompactIcon extends React.PureComponent<Props, State> {
  render() {
    //const {  } = this.props;
    return (
      <div className={classes.container}>
        &nbsp;
      </div>
    );
  }
}
export default CompactIcon;
