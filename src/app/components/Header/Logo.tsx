import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class Logo extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      color: '#333333',
      font: 'normal 25px Verdana',
      textAlign: 'center' as 'center',
      textShadow: 'black 1px 1px 2px, #333333 0 0 1em',
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
        Logo
      </div>
    );
  }
}
export default Logo;
