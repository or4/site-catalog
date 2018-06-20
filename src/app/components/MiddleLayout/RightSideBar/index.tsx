import React from 'react';
import { theme } from 'ui/theme';
import { log } from 'util/logger';

type Props = {
};
type State = {
};

class RightSideBar extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      boxSizing: 'border-box' as 'border-box',
      width: '300px',

      borderLeft: theme.content.devBorder,
    };
    return {
      container,
    };
  }
  render() {
    log('MiddleLayout RightSideBar render');
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
