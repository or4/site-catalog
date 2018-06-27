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
import WayButton from 'ui/buttons/WayButton';

// import textIcon1 from 'assets/tmp/price1.svg';
// import textIcon2 from 'assets/tmp/price2.svg';
// import textIcon3 from 'assets/tmp/price3.svg';
// import textIcon4 from 'assets/tmp/price4-sf-pro.svg';
// import textIcon5 from 'assets/tmp/price5-ubuntu.svg';
// import textIcon6 from 'assets/tmp/price6-ubuntu-medium.svg';
// import textIcon7 from 'assets/tmp/price7-ubuntu-bold.svg';


// import wayIcon1 from 'assets/tmp/compass.svg';
// import wayIcon2 from 'assets/tmp/compass2.svg';
// import wayIcon3 from 'assets/tmp/compass3.svg';
// import wayIcon4 from 'assets/tmp/compass4.svg';

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


    // contentLeftBar.push(<DownloadButton icon={textIcon1} key={'key-DownloadButton1'} />);
    // contentLeftBar.push(<DownloadButton icon={textIcon2} key={'key-DownloadButton2'} />);
    // contentLeftBar.push(<DownloadButton icon={textIcon3} key={'key-DownloadButton3'} />);
    // contentLeftBar.push(<DownloadButton icon={textIcon4} key={'key-DownloadButton4'} />);
    // contentLeftBar.push(<DownloadButton icon={textIcon5} key={'key-DownloadButton5'} />);
    // contentLeftBar.push(<DownloadButton icon={textIcon6} key={'key-DownloadButton6'} />);
    // contentLeftBar.push(<DownloadButton icon={textIcon7} key={'key-DownloadButton7'} />);

    // contentLeftBar.push(<WayButton icon={wayIcon1} key={'key-WayButton'} />);
    // contentLeftBar.push(<WayButton icon={wayIcon2} key={'key-WayButton'} />);
    // contentLeftBar.push(<WayButton icon={wayIcon3} key={'key-WayButton'} />);
    // contentLeftBar.push(<WayButton icon={wayIcon4} key={'key-WayButton'} />);


    if (routeHas(route, 'price')) {
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
