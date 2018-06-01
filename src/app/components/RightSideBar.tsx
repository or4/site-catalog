import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class RightSideBar extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      borderLeft: '1px solid #333',
      boxSizing: 'borderBox' as 'borderBox',
      width: '300px',
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
        RightSideBar
      </div>
    );
  }
}
export default RightSideBar;
