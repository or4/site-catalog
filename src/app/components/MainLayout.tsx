const appConfig = require('../../../config/main');

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Navigation } from 'components';

type Props = {
};
type State = {
};

class MainLayout extends React.Component<Props, State> {
  componentDidMount() {
    console.log('MainLayout componentDidMount');
  }
  getStyle = () => {
    const container = {
      background: '#ccc',
      height: '100vh',
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
      </div>
    );
  }
}

export default MainLayout;
