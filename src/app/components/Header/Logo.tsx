import React from 'react';
import { theme } from 'ui/theme';
import { isSmall } from 'util/responsive';
import { log } from 'util/logger';

type Props = {
  className?: any;
  style?: any;
};
type State = {
};

class Logo extends React.PureComponent<Props, State> {
  getStyle(customStyle: any) {
    const container = {
      width: isSmall() ? '268px' : '245px', // line break
      textAlign: 'center' as 'center',
      ...theme.header.logo,
    };
    if (customStyle) {
      Object.assign(container, customStyle);
    }
    return {
      container,
    };
  }
  render() {
    log('Header Logo render');
    const { className, style: customStyle } = this.props;
    const style = this.getStyle(customStyle);
    const classes = className ? className : '';
    return (
      <div style={style.container} className={classes}>
        РЕЗИНОТЕХНИКА СК
      </div>
    );
  }
}
export default Logo;
