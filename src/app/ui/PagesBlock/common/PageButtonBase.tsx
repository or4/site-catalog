import React from 'react';
import {
  scheme, flexRow, theming,
  borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius
} from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    boxSizing: 'border-box' as 'border-box',
    cursor: 'pointer',
    lineHeight: '28px',
    height: '28px',
    transition: '.1s ease-out',

    ...flexRow('center', 'center'),
    ...theming('scene-products-pages'),

    '&:hover': {
      ...theming('scene-products-pagesHover'),
    }
  },
  active: {
    ...theming('scene-products-pagesActive'),
  },
};


const getBorderClasses = () => {
  return {
    none: { },
    right: {
      ...borderTopRightRadius(),
      ...borderBottomRightRadius(),
    },
    left: {
      ...borderTopLeftRadius(),
      ...borderBottomLeftRadius(),
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
