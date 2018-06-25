import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';

import { TItem } from 'core/catalog/items/reducer';
import { TCategory } from 'core/catalog/categories/types';
import { selectItemsByPage } from 'core/catalog/items/selectors';

type OwnProps = {
  category: TCategory;
};
type StateProps = {
  items: TItem[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};


class ArticleProducts extends React.PureComponent<Props, State> {
  render() {
    const { items } = this.props;
    return (
      <div>
        <ul>
          {items.map((item: TItem) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, props: OwnProps) => {
  return {
    items: selectItemsByPage(state, props.category)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ArticleProducts);

