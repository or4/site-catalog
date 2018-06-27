import React from 'react';
import compassIcon from 'assets/tmp/compass3.svg';
import textIcon from 'assets/tmp/price3.svg';
import { flexRow } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const style = {
  img: {
    height: '32px',
    // marginLeft: '13px',
    left: '11px',
    position: 'absolute' as 'absolute'
  },
  text: {
    width: '120px',
    // marginLeft: '13px',
  },
};

const getClasses = () => {
  const container = {
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '4px',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    height: '50px',
    marginBottom: '8px',
    position: 'relative' as 'relative',
    width: '223px',

    ...flexRow('center', 'center'),
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    }
  };

  return {
    container,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;


type Props = {
  icon?: any;
};
type State = {
};

class WayButton extends React.PureComponent<Props, State> {

  render() {
    const { icon } = this.props;
    return (
      <div className={classes.container}>
        <img style={style.img} src={icon || compassIcon} alt="xls" />
        <img style={style.text} src={textIcon} alt="text" />
      </div>
    );
  }
}
export default WayButton;
