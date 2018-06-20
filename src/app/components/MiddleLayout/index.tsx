import React from 'react';
import LeftSideBar from './LeftSideBar';
import NavigationTree from './LeftSideBar/NavigationTree';
import RightSideBar from './RightSideBar';
import { RouteType, routeHas, routeContentIsRequired } from 'routes';
import { theme } from 'ui/theme';
import { isLarge, isMedium, isSmall } from 'util/responsive';


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

    const contentLeftBar: any = [];
    const contentRightBar: any = [];

    if (routeHas(route, 'tree')) {
      if (isSmall()) {
        // empty branch
      }
      else if (isMedium() && routeContentIsRequired('tree')) {
        contentLeftBar.push(<NavigationTree key={'key-NavigationTree'} />);
      } else if (isLarge()) {
        contentLeftBar.push(<NavigationTree key={'key-NavigationTree'} />);
      }
    }

    return (
      <div style={style.container}>
        {contentLeftBar.length !== 0 ? <LeftSideBar> {contentLeftBar} </LeftSideBar> : null}
        <div style={style.sceneContainer}>
          {this.props.children}
        </div>
        {contentRightBar.length !== 0 ? <RightSideBar> {contentRightBar} </RightSideBar> : null}
      </div>
    );
  }
}
export default MiddleLayout;
