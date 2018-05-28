const appConfig = require('../../../../config/main');

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import MainLayout from 'components/MainLayout';

// const style = require('./style.css');

class App extends React.Component<any, any> {
  public render() {
    return (

        <MainLayout>
          <Helmet {...appConfig.app} {...appConfig.app.head}/>
          <Header />
          {this.props.children}
        </MainLayout>

    );
  }
}

export { App }
