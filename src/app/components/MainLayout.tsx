const appConfig = require('../../../config/main');
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Navigation, Footer } from 'components';
import { ActionTypes } from 'core/catalog/categories/actions';
import { AppState } from 'store/reducers';
import { TCategory } from 'core/catalog/categories/reducer';

type StateProps = {
  categories: TCategory[];
};
type DispatchProps = {
  loadCategories: () => void;
};
type Props = StateProps & DispatchProps;

type State = {
};

class MainLayout extends React.Component<Props, State> {
  static getDerivedStateFromProps({ loadCategories, categories }: Props) {
    if (categories.length === 0) {
      console.log('******** CategoriesPage componentDidMount load action');
      loadCategories();
    }
    return {};
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

const mapStateToProps = (state: AppState) => ({
  categories: state.categories.data
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    loadCategories: () => {
      dispatch({ type: ActionTypes.LOAD_CATEGORIES });
    }
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(MainLayout);

