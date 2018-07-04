import React from 'react';
import { theme, flexRow } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    background: 'transparent' as 'transparent',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box' as 'border-box',
    // borderRadius: '3px',
    cursor: 'pointer',
    height: '28px',
    transition: '.1s ease-out',

    ...theme.paging.text,
    ...flexRow('center', 'center'),

    '&:hover': {
      border: '1px solid rgba(0, 0, 0, 0.4)',
    }
  };
  const active = {
    border: '1px solid rgba(0, 0, 0, 0.4)',
  };

  return {
    container,
    active,
  };
};


const getBorderClasses = () => {
  return {
    none: { },
    right: {
      borderTopRightRadius: '3px',
      borderBottomRightRadius: '3px',
    },
    left: {
      borderTopLeftRadius: '3px',
      borderBottomLeftRadius: '3px',
    },
    full: { borderRadius: '3px', },
  };
};

export type BorderRadius = 'none' | 'right' | 'left' | 'full';

type Props = {
  className?: string;
  borderRadius: BorderRadius;
  isActive?: boolean;
  onClick?: () => void;
};
type State = {
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;
const borderClasses = jss.createStyleSheet(getBorderClasses()).attach().classes;

export class PageButtonBase extends React.PureComponent<Props, State> {
  render() {
    const { className, borderRadius, isActive } = this.props;
    return (
      <div
        className={[classes.container, borderClasses[borderRadius], className, isActive ? classes.active : ''].join(' ')}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}
