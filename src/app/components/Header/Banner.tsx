import React from 'react';
import banner from 'assets/images/banners/jaroslavl-small.jpg';
import log from 'util/logger';

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
      height: '100px',
      width: '160px',
    };
    return {
      container,
      banner,
    };
  }
  render() {
    log('Header Banner render');
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
