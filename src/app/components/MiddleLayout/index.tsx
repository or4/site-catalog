import React from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import { RouteType, routeHas } from 'routes';
import { theme } from 'ui/theme';
import { isLarge, isMedium, isSmall } from 'util/responsive';
import { log } from 'util/logger';
import NavigationTree from 'ui/NavigationTree';
import { subscribeResize, unsubscribeResize } from 'components/Resize';


type Props = {
  children: any;
  route: RouteType;
};
type State = {
};


class MiddleLayout extends React.PureComponent<Props, State> {
  componentDidMount() { subscribeResize(this, 'MiddleLayout') }
  componentWillUnmount() { unsubscribeResize(this, 'MiddleLayout') }

  getStyle() {
    const container = {
      display: 'flex',
      minHeight: theme.content.minHeight,
    };
    const sceneContainer = {
      margin: theme.content.defaultMargin1,
      width: 'calc(100% - 40px)',
    };
    return {
      container,
      sceneContainer,
    };
  }
  render() {
    log('MiddleLayout render');
    const style = this.getStyle();
    const { route } = this.props;

    const contentLeftBar: any = [];
    const contentRightBar: any = [];

    if (routeHas(route, 'tree')) {
      if (isSmall() || isMedium()) {
        // empty branch
      }
      else if (isLarge()) {
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
