const appConfig = require('../../../config/main');
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import React from 'react';
import { Helmet } from 'react-helmet';
// import { Header, Navigation, Footer } from 'components';
import { ActionTypes as CategoriesActionTypes } from 'core/catalog/categories/actions';
import { AppState } from 'store/reducers';
import { TItem } from 'core/catalog/items/reducer';
import { IS_DEV } from 'settings';
import { TCategory } from 'core/catalog/categories/types';

type StateProps = {
  categories: TCategory[];
  items: TItem[];
};
type DispatchProps = {
  loadCategories: () => void;
};
type Props = StateProps & DispatchProps;

type State = {
};
let first = true;
class MainLayout extends React.Component<Props, State> {
  state = {};
  static getDerivedStateFromProps({ loadCategories, categories, /* loadItems, items,*/ }: Props) {
    if (first && categories.length === 0) {
      console.log('******** CategoriesPage componentDidMount load action');
      loadCategories();
      first = false;
    }

    return {};
  }
  getStyle = () => {
    const container = {
      background: IS_DEV ? '#fff' : '#ccc',
      minHeight: '100vh',
      minWidth: '1024px',
    };

    return {
      container,
    };
  }
  public render() {
    const style = this.getStyle();

    let date = new Date();
    console.log(`render this.props.items.length ${date.getMinutes()}:${date.getSeconds()}`, this.props.items.length);
    console.log(`render this.props.categories.length ${date.getMinutes()}:${date.getSeconds()}`, this.props.categories.length);

    // i don't know why, but if remove wrapper of prop.children
    // container of it would not render
    // <Navigation />
    // <Header />
    // <Footer />
    return (
      <div style={style.container}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />

        <div>
          {this.props.children}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  categories: state.categories.separated,
  items: state.items.data,
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    loadCategories: () => {

      let date = new Date();
      console.log(`pre dispatch ${date.getMinutes()}:${date.getSeconds()}`);

      dispatch({ type: CategoriesActionTypes.LOAD_CATEGORIES });

      date = new Date();
      console.log(`after dispatch! ${date.getMinutes()}:${date.getSeconds()}`);
    },
    // loadItems: () => {
    //   dispatch(loadItems());
    // },
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(MainLayout);

