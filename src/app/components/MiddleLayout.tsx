import React from 'react';
import { RouteType, routeHas } from 'routes';
import {
  theme, subscribeResize, unsubscribeResize,
  LeftSideBar, RightSideBar, PhotoSlider, DownloadButton, WayButton
} from 'ui';
import { logs, isLarge, isMedium, isSmall, isInitial } from 'utils';

import { NavigationTree } from './NavigationTree';

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
