import React from 'react';
import { Link } from 'react-router';
import { scheme } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    display: 'inline-block',
    lineHeight: '36px',
    padding: '0 5px',
  },
  sign: {
    marginRight: '10px',
    color: scheme.colors.navigation,
    fontFamily: scheme.fontFamily.navigation,
    fontSize: scheme.fontSize.navigation,
  },
  link: {
    textDecoration: 'none' as 'none',
    color: scheme.colors.navigation,
    fontFamily: scheme.fontFamily.navigation,
    fontSize: scheme.fontSize.navigation,

    '&:hover': {
      textDecoration: 'underline' as 'underline'
    },
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  text: string;
  to: string;
};
type State = {
};

export class NavigationMenuItem extends React.PureComponent<Props, State> {
  render() {
    const { to, text } = this.props;
    return (
      <div className={classes.container}>
        <span className={classes.sign}>◆</span>
        <Link className={classes.link} to={to}>{text}</Link>
      </div>
    );
  }
}
