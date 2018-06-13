import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
//import { AppState } from 'store/reducers';
import MiddleLayout from 'components/MiddleLayout';


type StateProps = {
};
type DispatchProps = {
  getStars: () => void;
};
type Props = StateProps & DispatchProps;

type State = {
};

class News extends React.PureComponent<Props, State> {
  render() {
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
      // getStarsEx1()(dispatch);
    }

  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(News);
