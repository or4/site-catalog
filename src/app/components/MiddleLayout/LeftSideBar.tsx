import React from 'react';
import { theme } from 'ui/theme';
import { log } from 'util/logger';

type Props = {
};
type State = {
};

class LeftSideBar extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {};

    Object.assign(container, {
      boxSizing: 'border-box' as 'border-box',
      minHeight: theme.content.minHeight,
      width: '300px',

      borderRight: theme.content.devBorder,
    });

    return {
      container,
    };
  }

  render() {
    log('MiddleLayout LeftSideBar render');
    const style = this.getStyle();

    return (
      <div style={style.container}>
        {this.props.children}
      </div>
    );
  }
}
export default LeftSideBar;
