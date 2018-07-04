import React from 'react';
import { LeftSideBar } from 'ui/LeftSideBar';
import { RightSideBar } from 'ui/RightSideBar';
import { RouteType, routeHas } from 'routes';
import { theme } from 'ui/theme';
import { log, isLarge, isMedium, isSmall, isInitial } from 'utils';
import { NavigationTree } from 'components/NavigationTree';
import { subscribeResize, unsubscribeResize } from 'ui/Resize';
import { PhotoSlider } from 'ui/PhotoSlider';
import { DownloadButton } from 'ui/buttons/DownloadButton';
import { WayButton } from 'ui/buttons/WayButton';

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
    log('MiddleLayout render');
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
