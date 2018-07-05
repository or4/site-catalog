import React from 'react';
import { scheme } from 'ui';
import { logs, join, pickBySize } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClassesSmall = {
  container: {
    textAlign: 'center' as 'center',
    color: scheme.colors.headerLogo,
    fontFamily: scheme.fontFamily.headerLogo,
    fontSize: scheme.fontSize.headerLogo,
    textShadow: scheme.textShadows.logoTextShadow,
    width: '268px',
  },
};
const classesSmall = jss.createStyleSheet(rawClassesSmall).attach().classes;

const rawClassesMedium = {
  container: {
    textAlign: 'center' as 'center',
    color: scheme.colors.headerLogo,
    fontFamily: scheme.fontFamily.headerLogo,
    fontSize: scheme.fontSize.headerLogo,
    textShadow: scheme.textShadows.logoTextShadow,
    width: '245px',
  },
};
const classesMedium = jss.createStyleSheet(rawClassesMedium).attach().classes;


type Props = {
  className?: any;
  style?: any;
};
type State = {
};

export class Logo extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: '',
    style: {},
  }
  render() {
    logs('render', 'Header Logo');
    const { className, style } = this.props;
    const classes = pickBySize(classesSmall, classesMedium);

    return (
      <div className={join(classes.container, className)} style={style}>
        РЕЗИНОТЕХНИКА СК
      </div>
    );
  }
}
