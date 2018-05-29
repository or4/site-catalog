import React from 'react';
import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class Logo extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      textAlign: 'center' as 'center',
      ...theme.header.logo,
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        РЕЗИНОТЕХНИКА СК
      </div>
    );
  }
}
export default Logo;
