import React from 'react';
import LeftSideBar from 'components/LeftSideBar';
import RightSideBar from 'components/RightSideBar';
import { RouteType, routesHasLeftSideBar, routesHasRightSideBar } from 'routes';
import { theme } from 'ui/theme';

type Props = {
  children: any;
  route: RouteType;
};
type State = {
};

class MiddleLayout extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      display: 'flex',
      minHeight: theme.content.minHeight,
    };
    const sceneContainer = {
      margin: theme.content.defaultMargin1,
      width: '100%'
    };
    return {
      container,
      sceneContainer,
    };
  }
  render() {
    const style = this.getStyle();
    const { route } = this.props;
    const content = [];

    if (routesHasLeftSideBar.indexOf(route) !== -1) {
      content.push(<LeftSideBar key={'left-side-bar_key'} />);
    }

    content.push(
      <div key={'content_key'} style={style.sceneContainer}>
        {this.props.children}
      </div>
    );

    if (routesHasRightSideBar.indexOf(route) !== -1) {
      content.push(<RightSideBar key={'right-side-bar_key'} />);
    }

    return (
      <div style={style.container}>
        {content}
      </div>
    );
  }
}
export default MiddleLayout;
