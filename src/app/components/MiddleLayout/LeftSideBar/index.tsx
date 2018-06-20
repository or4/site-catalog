import React from 'react';
import { theme } from 'ui/theme';
import { isSmall } from 'util/responsive';
import log from 'util/logger';

type Props = {
};
type State = {
};

class LeftSideBar extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {};
    if (isSmall()) {
      Object.assign(container, {
        display: 'none',
      });
    } else {
      Object.assign(container, {
        boxSizing: 'border-box' as 'border-box',
        minHeight: theme.content.minHeight,
        width: '300px',

        borderRight: theme.content.devBorder,
      });
    }
    return {
      container,
    };
  }
  componentDidMount() {
    try {
      window.addEventListener('resize', this.resize);
    } catch (error) { }
  }

  componentWillUnmount() {
    try {
      window.removeEventListener('resize', this.resize);
    } catch (error) { }
  }
  resize = () => this.forceUpdate()
  render() {
    log('LeftSideBar render');
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        {this.props.children}
      </div>
    );
  }
}
export default LeftSideBar;
