import React from 'react';
import { Helmet } from 'react-helmet';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, TItem, TCategory, CategoriesActionTypes } from 'core/types';
import { Header, NavigationMenu, Vault } from 'components';
import { Resize, ScreenSize } from 'ui';
import { logs, isInitial } from 'utils';

const appConfig = require('../../../config/main');

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
class MainLayoutComponent extends React.Component<Props, State> {
  state = {};
  rawStyle = {
    container: {
      maxWidth: '100%',
      overflow: 'hidden' as 'hidden',
    },
  }

  static getDerivedStateFromProps({ loadCategories, categories, /* loadItems, items,*/ }: Props) {
    if (first && categories.length === 0) {
      logs('actions', '******** CategoriesPage componentDidMount load action');
      loadCategories();
      first = false;
    }
    return {};
  }

  public render() {
    logs('render', 'MainLayoutComponent');
    logs('categories', `render this.props.categories.length`, this.props.categories.length);
    logs('items', `render this.props.items.length`, this.props.items.length);

    return (
      <div style={this.rawStyle.container}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />

        {true ? null : !isInitial() && <Header />}
        {!isInitial() && <NavigationMenu />}

        <div>
          {this.props.children}
        </div>

        <Vault />
        <Resize />
        <ScreenSize />
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
      dispatch({ type: CategoriesActionTypes.LOAD_CATEGORIES });
    },
  };
};
export const MainLayout = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(MainLayoutComponent);

