const appConfig = require('../../../config/main');

import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Navigation, Footer } from 'components';

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

    return {
      container,
    };
  }
  public render() {
    const style = this.getStyle();
    return (
      <div style={style.container}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
