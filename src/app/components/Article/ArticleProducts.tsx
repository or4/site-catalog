import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';

import { TItem, selectItemsByCategory } from 'core/catalog/items/reducer';
import { TCategory } from 'core/catalog/categories/types';

type OwnProps = {
  category: TCategory;
};
type StateProps = {
  selectItems: () => TItem[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};


class ArticleProducts extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <ul>
          {this.props.selectItems().map((item: TItem) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, props: OwnProps) => {
  return {
    selectItems: selectItemsByCategory.bind(null, state, props.category),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ArticleProducts);

