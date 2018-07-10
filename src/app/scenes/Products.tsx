import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'core/types';
import { MiddleLayout } from 'components/MiddleLayout';
import { logs } from 'utils';
import { Article } from 'components/Article';


type OwnProps = {
  routeParams: any;
};
type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class ProductsComponent extends React.PureComponent<Props, State> {

  render() {
    logs('render', 'Products');
    return (
      <MiddleLayout route={'/products'}>
        <Article categoryId={this.props.routeParams.category || '0'} />
      </MiddleLayout>
    );
  }
}


const mapStateToProps = (state: AppState, props: OwnProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export const Products = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ProductsComponent);
