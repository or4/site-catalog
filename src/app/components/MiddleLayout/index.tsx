import React from 'react';
import LeftSideBar from './LeftSideBar';
import NavigationTree from './LeftSideBar/NavigationTree';
import RightSideBar from './RightSideBar';
import { RouteType, routeHas } from 'routes';
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

    routeHas(route, 'tree') &&
      content.push(<LeftSideBar key={'left-side-bar_key'}> <NavigationTree /> </LeftSideBar>);


    content.push(<div key={'content_key'} style={style.sceneContainer}>{this.props.children}</div>);

    routeHas(route, 'news') &&
      content.push(<RightSideBar key={'left-side-bar_key'} />);


    return (
      <div style={style.container}>
        {content}
      </div>
    );
  }
}
export default MiddleLayout;
