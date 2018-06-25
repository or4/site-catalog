import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';

import { TItem, selectItemsByCategory } from 'core/catalog/items/reducer';
import { TCategory } from 'core/catalog/categories/types';
import { selectCategory } from 'core/catalog/categories/reducer';


type OwnProps = {
  routeParams?: any;
};
type StateProps = {
  categoryId: string;
  selectCategory: (category: string) => TCategory;

  categoryDescription: string;
  selectItems: () => TItem[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};


class Article extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, props: OwnProps) => {
  const category = selectCategory(state, props.routeParams.category);
  return {
    selectItems: selectItemsByCategory.bind(null, state, props.routeParams.category),
    categoryDescription: category && category.description || '',
    categoryId: props.routeParams.category,
    selectCategory: selectCategory.bind(null, state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Article);