import React from 'react';
import { theme, flexColumn } from 'ui/theme';
import { log } from 'util/logger';

type Props = {
};
type State = {
};

class RightSideBar extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {};

    Object.assign(container, {
      // boxSizing: 'border-box' as 'border-box',
      minHeight: theme.content.minHeight,
      width: '300px',
      display: 'flex',
      justifyContent: 'center' as 'center',

      // borderLeft: theme.content.devBorder,
      ...flexColumn('center', 'flex-start'),
    });

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
        {this.props.children}
      </div>
    );
  }
}
export default RightSideBar;
