import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'core/types';
import { MiddleLayout } from 'components/MiddleLayout';
import { logs } from 'utils';
import { Paging } from 'components/Paging';
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

class CatalogComponent extends React.PureComponent<Props, State> {

  render() {
    logs('render', 'Catalog');
    return (
      <MiddleLayout route={'/catalog'}>
        <Paging routeParams={this.props.routeParams} />
        <Article routeParams={this.props.routeParams} />
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
export const Catalog = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(CatalogComponent);
