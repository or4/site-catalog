import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import MiddleLayout from 'components/MiddleLayout';
import { log } from 'util/logger';
import Paging from 'components/Paging';
import Article from 'components/Article';


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

class Products extends React.PureComponent<Props, State> {

  render() {
    log('Catalog render');
    return (
      <MiddleLayout route={'/catalog'}>
        <Paging />
        <Article />
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
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Products);
