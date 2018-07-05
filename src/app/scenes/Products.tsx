import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'core/types';
import { MiddleLayout } from 'components/MiddleLayout';
import { logs } from 'utils';

type OwnProps = {
};
type StateProps = {
  // items: TItem[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class ProductsComponent extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    logs('render', 'ProductsComponent');
    // const style = this.getStyle();
    // const { items } = this.props;
    // {items && items.map((item: TItem) => <li key={item.id}>{item.name}</li>)}
    // log('ProductsComponent items', this.props.items);

    return (
      <MiddleLayout route={'/products'}>
        <ul>
          {null}
        </ul>
      </MiddleLayout>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  // items: state.items.data
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {

  };
};
export const Products =  connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ProductsComponent);
