import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import MiddleLayout from 'components/MiddleLayout';
import { log } from 'util/logger';


type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
};

class News extends React.PureComponent<Props, State> {
  render() {
    log('News render');
    return (
      <MiddleLayout route={'/news'}>
        <div>
          News
        </div>
      </MiddleLayout>
    );
  }
}
const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    getStars: () => {
    }
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(News);
