const appConfig = require('../../../config/main');
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Navigation, Footer } from 'components';
import { ActionTypes as CategoriesActionTypes } from 'core/catalog/categories/actions';
import { ActionTypes as ItemsActionTypes } from 'core/catalog/items/actions';
import { AppState } from 'store/reducers';
import { TCategory } from 'core/catalog/categories/reducer';
import { TItem } from 'core/catalog/items/reducer';

type StateProps = {
  categories: TCategory[];
  items: TItem[];
};
type DispatchProps = {
  loadCategories: () => void;
  loadItems: () => void;
};
type Props = StateProps & DispatchProps;

type State = {
};

class MainLayout extends React.Component<Props, State> {
  static getDerivedStateFromProps({ loadCategories, categories, loadItems, items, }: Props) {
    if (categories.length === 0) {
      console.log('******** CategoriesPage componentDidMount load action');
      loadCategories();
    }
    if (items.length === 0) {
      console.log('******** CategoriesPage componentDidMount load action');
      loadItems();
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
  categories: state.categories.data,
  items: state.items.data,
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    loadCategories: () => {
      dispatch({ type: CategoriesActionTypes.LOAD_CATEGORIES });
    },
    loadItems: () => {
      dispatch({ type: ItemsActionTypes.LOAD_ITEMS });
    },
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(MainLayout);

