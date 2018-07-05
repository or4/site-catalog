import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, TItem, TCategory } from 'core/types';

import { selectItemsByPage } from 'core/catalog/items/selectors';
import { Table } from 'ui/Table';
import { logs } from 'utils';

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


class ArticleProductsComponent extends React.PureComponent<Props, State> {
  render() {
    const { items } = this.props;
    logs('items', items);
    return (
      <div>
        <Table items={items as any} />
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
export const ArticleProducts = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ArticleProductsComponent);

