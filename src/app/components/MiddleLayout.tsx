import React from 'react';
import { RouteType, routeHas } from 'routes';
import {
  scheme, subscribeResize, unsubscribeResize,
  LeftSideBar, RightSideBar, PhotoSlider, DownloadButton, WayButton,
  WayPoint,
} from 'ui';

import { logs, isLarge, isMedium, isSmall, isInitial } from 'utils';

import { NavigationTree } from './NavigationTree';
// import { isMoreThan1594 } from 'utils/responsive';

type Props = {
  children: any;
  route: RouteType;
};
type State = {
};


export class MiddleLayout extends React.PureComponent<Props, State> {
  componentDidMount() { subscribeResize(this, 'MiddleLayout') }
  componentWillUnmount() { unsubscribeResize(this, 'MiddleLayout') }

  getStyle() {
    const container = {
      display: 'flex',
      minHeight: scheme.general.minHeight,
    };
    const sceneContainer = {
      margin: scheme.general.defaultMargin1,
      maxWidth: '1024px',
      width: 'calc(100% - 40px)',
      // marginLeft: isMoreThan1594() ? 'auto' : '285px',
      // marginRight: isMoreThan1594() ? 'auto' : '0',
    };
    return {
      container,
      sceneContainer,
    };
  }
  render() {
    logs('render', 'MiddleLayout');
    const style = this.getStyle();
    const { route } = this.props;

    const contentLeftBar: any = [];
    const contentRightBar: any = [];
    let isCompact = false;

    if (routeHas(route, 'price') && !isInitial()) {
      if (isSmall()) {
        // empty
      }
      else if (isMedium()) {
        contentLeftBar.push(<DownloadButton key={'key-DownloadButton'} />);
        contentLeftBar.push(<WayButton key={'key-WayButton'} />); }
      else if (isLarge()) {
        contentLeftBar.push(<DownloadButton key={'key-DownloadButton'} />);
        contentLeftBar.push(<WayButton key={'key-WayButton'} />);
      }
    }

    if (routeHas(route, 'tree') && !isInitial()) {
      if (isSmall()) {
        isCompact = true;
      }
      else if (isMedium()) {
        contentLeftBar.push(<NavigationTree route={route} key={'key-NavigationTree'} />);
        isCompact = true;
      }
      else if (isLarge()) {
        contentLeftBar.push(<NavigationTree route={route} key={'key-NavigationTree'} />);
      }
    }

    if (routeHas(route, 'photo') && !isInitial()) {
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


    if (routeHas(route, 'way') && !isInitial()) {
      if (isSmall()) {
        // empty
      }
      else if (isMedium()) {
        contentLeftBar.push(<WayPoint key={'key-WayPoint'} />);
      }
      else if (isLarge()) {
        contentLeftBar.push(<WayPoint key={'key-WayPoint'} />);
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
