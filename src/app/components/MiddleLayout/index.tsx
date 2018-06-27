import React from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import { RouteType, routeHas } from 'routes';
import { theme } from 'ui/theme';
import { isLarge, isMedium, isSmall } from 'util/responsive';
import { log } from 'util/logger';
import NavigationTree from 'ui/NavigationTree';
import { subscribeResize, unsubscribeResize } from 'components/Resize';
import PhotoSlider from 'ui/PhotoSlider';
import DownloadButton from 'ui/buttons/DownloadButton';


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
    let isCompact = false;

    if (routeHas(route, 'price')) {
      if (isSmall()) {
        // empty
      }
      else if (isMedium()) {
        contentLeftBar.push(<DownloadButton key={'key-DownloadButton'} />);
      }
      else if (isLarge()) {
        contentRightBar.push(<DownloadButton key={'key-DownloadButton'} />);
      }
    }

    if (routeHas(route, 'tree')) {
      if (isSmall()) {
        contentLeftBar.push(<NavigationTree key={'key-NavigationTree'} />);
        isCompact = true;
      }
      else if (isMedium()) {
        contentLeftBar.push(<NavigationTree key={'key-NavigationTree'} />);
        isCompact = true;
      }
      else if (isLarge()) {
        contentLeftBar.push(<NavigationTree key={'key-NavigationTree'} />);
      }
    }

    if (routeHas(route, 'photo')) {
      if (isSmall()) {
        // empty
      }
      else if (isMedium()) {
        contentLeftBar.push(<PhotoSlider key={'key-PhotoSlider'} />);
      }
      else if (isLarge()) {
        contentLeftBar.push(<PhotoSlider key={'key-PhotoSlider'} />);
      }
    }



    return (
      <div style={style.container}>
        {contentLeftBar.length !== 0 ? <LeftSideBar isCompact={isCompact}> {contentLeftBar} </LeftSideBar> : null}
        <div style={style.sceneContainer}>
          {this.props.children}
        </div>
        {contentRightBar.length !== 0 ? <RightSideBar> {contentRightBar} </RightSideBar> : null}
      </div>
    );
  }
}
export default MiddleLayout;
