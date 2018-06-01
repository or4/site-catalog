const appConfig = require('../../../config/main');

import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Navigation, Footer } from 'components';
import LeftSideBar from 'components/LeftSideBar';
import RightSideBar from 'components/RightSideBar';

type Props = {
};
type State = {
};

class MainLayout extends React.Component<Props, State> {
  getStyle = () => {
    const container = {
      background: '#ccc',
      minHeight: '100vh',
      minWidth: '1024px',
    };

    const mainSectionContainer = {
      display: 'flex',
    };

    const contentContainer = {
      width: '100%'
    };

    return {
      container,
      mainSectionContainer,
      contentContainer,
    };
  }
  public render() {
    const style = this.getStyle();
    return (
      <div style={style.container}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <Navigation />

        <div style={style.mainSectionContainer}>
          <LeftSideBar />
          <div style={style.contentContainer}>
            {this.props.children}
          </div>
          <RightSideBar />
        </div>

        <Footer />
      </div>
    );
  }
}

export default MainLayout;
