const appConfig = require('../../../config/main');

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'components';

class MainLayout extends React.Component<any, any> {
  componentDidMount() {
    console.log('MainLayout componentDidMount');
  }
  getStyle = () => {
    const container = {
      background: '#ccc',
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
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
