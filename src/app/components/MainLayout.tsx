const appConfig = require('../../../config/main');
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionTypes } from 'core/sagas/actions';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Navigation, Footer } from 'components';

type StateProps = {
};
type DispatchProps = {
  loadBalance: () => void;
};
type Props = StateProps & DispatchProps;

type State = {
};

class MainLayout extends React.Component<Props, State> {
  componentDidMount() {
    console.log('MainLayout componentDidMount');
    this.props.loadBalance();
  }
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
    // i don't know why, but if remove wrapper of prop.children
    // container of it would not render
    return (
      <div style={style.container}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <Navigation />

        <div>
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    loadBalance: () => {
      dispatch({ type: ActionTypes.LOAD_BALANCE });
    }
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(MainLayout);

