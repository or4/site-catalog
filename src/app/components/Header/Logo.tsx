import React from 'react';
import { theme } from 'ui/theme';

type Props = {
  className?: any;
  style?: any;
};
type State = {
};

class Logo extends React.PureComponent<Props, State> {
  getStyle(customStyle: any) {
    const container = {
      //marginLeft: '40px',
      width: '245px',
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
