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

class ProductionComponent extends React.PureComponent<Props, State> {

  render() {
    logs('render', 'Production');
    return (
      <MiddleLayout route={'/production'}>
        <Article categoryId={'1'} />
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
export const Production = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ProductionComponent);
