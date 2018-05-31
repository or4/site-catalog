import React from 'react';
import banner from 'assets/images/banners/jaroslavl-small.jpg';
import { theme } from 'ui/theme';

type Props = {
  className?: any;
  style?: any;
};
type State = {
};

class Banner extends React.PureComponent<Props, State> {
  getStyle(customStyle: any) {
    const container = {
      height: '100px',
    };
    if (customStyle) {
      Object.assign(container, customStyle);
    }
    const banner = {
      ...theme.header.banner,
    };
    return {
      container,
      banner,
    };
  }
  render() {
    const { className, style: customStyle } = this.props;
    const style = this.getStyle(customStyle);
    const classes = className ? className : '';
    return (
      <div style={style.container} className={classes}>
        <img style={style.banner} src={banner} alt="" />
      </div>
    );
  }
}
export default Banner;
