import React from 'react';
import { theme, flexRow, borderRadiusScheme } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    borderRadius: borderRadiusScheme.default,
    cursor: 'pointer',
    height: '50px',
    marginBottom: '8px',
    position: 'relative' as 'relative',
    width: '263px',

    ...theme.buttonBase.container,
    ...flexRow('center'),

    '&:hover': {
      ...theme.buttonBase.containerHover,
    }
  },
  img: {
    height: '32px',
    margin: '0 10px 0 13px',
  },
  text: {
    fontFamily: 'Tahoma',
    letterSpacing: '2px',
    color: 'rgba(0,0,0,0.7)',
    fontSize: '13px',
    fontWeight: '600' as 'bold',
  },
};

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;


type Props = {
  icon: any;
  text: string;
};
type State = {
};

export class BaseButton extends React.PureComponent<Props, State> {
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
