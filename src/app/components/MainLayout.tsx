const appConfig = require('../../../config/main');

import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Navigation } from 'components';

const css = require('./MainLayout.scss');

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
    };

    return {
      container,
    };
  }
  public render() {
    const style = this.getStyle();
    return (
      <div className={css.container} style={style.container}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
