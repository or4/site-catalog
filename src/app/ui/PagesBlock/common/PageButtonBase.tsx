import React from 'react';
import { theme, flexRow, borderRadiusScheme } from 'ui/theme';


import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    boxSizing: 'border-box' as 'border-box',
    cursor: 'pointer',
    height: '28px',
    transition: '.1s ease-out',

    ...theme.pages.text,
    ...flexRow('center', 'center'),

    '&:hover': {
      ...theme.pages.textHover,
    }
  },
  active: {
    ...theme.pages.textActive,
  },
};


const getBorderClasses = () => {
  return {
    none: { },
    right: {
      borderTopRightRadius: borderRadiusScheme.default,
      borderBottomRightRadius: borderRadiusScheme.default,
    },
    left: {
      borderTopLeftRadius: borderRadiusScheme.default,
      borderBottomLeftRadius: borderRadiusScheme.default,
    },
    full: {
      borderRadius: borderRadiusScheme.default,
    },
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

const sheet = jss.createStyleSheet(rawClasses).attach();
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
