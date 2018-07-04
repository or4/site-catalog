import React from 'react';
import { theme } from 'ui/theme';
import { isSmall, log, join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    textAlign: 'center' as 'center',
    ...theme.header.logo,
  },
  small: {
    width: '268px'
  },
  another: {
    width: '245px'
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

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
    log('Header Logo render');
    const { className: customClassName, style: customStyle } = this.props;

    return (
      <div
        className={join(classes.container, isSmall() ? classes.small : classes.another, customClassName)}
        style={customStyle}
      >
        РЕЗИНОТЕХНИКА СК
      </div>
    );
  }
}
