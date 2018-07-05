import React from 'react';
import { scheme, flexRow } from 'ui/theme';


import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    background: scheme.background.pages,
    border: scheme.borders.pages,
    boxSizing: 'border-box' as 'border-box',
    color: scheme.colors.pages,
    cursor: 'pointer',
    fontFamily: scheme.fontFamily.pages,
    fontSize: scheme.fontSize.pages,
    height: '28px',
    transition: '.1s ease-out',

    lineHeight: '28px',
    ...flexRow('center', 'center'),

    '&:hover': {
      border: scheme.borders.pagesHover,
    }
  },
  active: {
    border: scheme.borders.pagesActive,
  },
};


const getBorderClasses = () => {
  return {
    none: { },
    right: {
      borderTopRightRadius: scheme.borderRadius.default,
      borderBottomRightRadius: scheme.borderRadius.default,
    },
    left: {
      borderTopLeftRadius: scheme.borderRadius.default,
      borderBottomLeftRadius: scheme.borderRadius.default,
    },
    full: {
      borderRadius: scheme.borderRadius.default,
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
