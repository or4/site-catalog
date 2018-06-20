import React from 'react';
import log from 'util/logger';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class VerticalSlider extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    log('VerticalSlider render');
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        VerticalSlider
      </div>
    );
  }
}
export default VerticalSlider;
