import React from 'react';
import banner from 'assets/images/banners/jaroslavl-small.jpg';
import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class Banner extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    const banner = {
      ...theme.header.banner,
    };
    return {
      container,
      banner,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        <img style={style.banner} src={banner} alt="" />
      </div>
    );
  }
}
export default Banner;
