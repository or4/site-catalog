import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { AppState } from 'store/reducers';
import { TCategory } from 'core/catalog/categories/types';

type OwnProps = {
};
type StateProps = {
  categories: TCategory[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class NavigationTree extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  getNavMenu = (path: string, categories: TCategory[]): any => {
    if (!categories) {
      return null;
    }
    return (
      <ul>
        {
          categories && categories.map(
            (item: TCategory) => (

              <li key={item.id}>
                <Link to={`/catalog/${item.idVirtual}`}>
                  {item.name}
                </Link>
                {this.getNavMenu(path + item.idVirtual, item.subItems)}
              </li>))
        }
      </ul>
    );
  }
  render() {
    // const style = this.getStyle();
    // const {  } = this.props;
    // log('NavigationTree categories', this.props.categories);

    return (
      <div>
        {this.getNavMenu('', this.props.categories)}
      </div>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  categories: state.categories.separated
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {

  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(NavigationTree);
