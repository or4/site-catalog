import React from 'react';
import { theme } from 'ui/theme';
import { logs, join, pickBySize } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClassesSmall = {
  container: {
    textAlign: 'center' as 'center',
    width: '268px',
    ...theme.header.logo,
  },
  another: {
    width: '245px'
  },
};
const classesSmall = jss.createStyleSheet(rawClassesSmall).attach().classes;

const rawClassesMedium = {
  container: {
    textAlign: 'center' as 'center',
    width: '245px',
    ...theme.header.logo,
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
    const { className: customClassName, style: customStyle } = this.props;
    const classes = pickBySize(classesSmall, classesMedium);

    return (
      <div className={join(classes.container, customClassName)} style={customStyle}>
        РЕЗИНОТЕХНИКА СК
      </div>
    );
  }
}
