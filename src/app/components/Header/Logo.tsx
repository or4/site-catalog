import React from 'react';
import { theming } from 'ui';
import { logs, join, pickBySize } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClassesSmall = {
  container: {
    lineHeight: '26px',
    textAlign: 'center' as 'center',
    width: '268px',

    ...theming('headerLogo'),
  },
};
const classesSmall = jss.createStyleSheet(rawClassesSmall).attach().classes;

const rawClassesMedium = {
  container: {
    lineHeight: '15px',
    textAlign: 'center' as 'center',
    width: '245px',

    ...theming('headerLogo'),
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
