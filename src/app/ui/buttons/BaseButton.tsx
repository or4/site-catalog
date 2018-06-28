import React from 'react';
import { flexRow } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '4px',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    height: '50px',
    marginBottom: '8px',
    position: 'relative' as 'relative',
    width: '223px',

    ...flexRow('center'),

    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    }
  };

  const img = {
    height: '32px',
    margin: '0 10px 0 13px',
  };
  const text = {
    fontFamily: 'Tahoma',
    letterSpacing: '2px',
    color: 'rgba(0,0,0,0.7)',
    fontSize: '13px',
    fontWeight: '600' as 'bold',
  };

  return {
    container,
    img,
    text,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;


type Props = {
  icon: any;
  text: string;
};
type State = {
};

class BaseButton extends React.PureComponent<Props, State> {

  render() {
    const { icon, text } = this.props;
    return (
      <div className={classes.container}>
        <img className={classes.img} src={icon} alt="icon" />
        <span className={classes.text}>{text}</span>
      </div>
    );
  }
}
export default BaseButton;
