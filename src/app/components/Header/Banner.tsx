import React from 'react';
import banner from 'assets/images/banners/jaroslavl-small.jpg';
import { theme } from 'ui/theme';

type Props = {
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
    const { style: customStyle } = this.props;
    const style = this.getStyle(customStyle);
    return (
      <div style={style.container}>
        <img style={style.banner} src={banner} alt="" />
      </div>
    );
  }
}
export default Banner;
