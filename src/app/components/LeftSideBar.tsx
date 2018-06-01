import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class LeftSideBar extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      borderRight: '1px solid #333',
      boxSizing: 'borderBox' as 'borderBox',
      minHeight: '600px',
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
        LeftSideBar
      </div>
    );
  }
}
export default LeftSideBar;
