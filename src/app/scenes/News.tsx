import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
//import { AppState } from 'store/reducers';
import MiddleLayout from 'components/MiddleLayout';


type StateProps = {
  stars: any;
  isFetching: any;
};
type DispatchProps = {
  getStars: () => void;
};
type Props = StateProps & DispatchProps;

type State = {
};

class News extends React.PureComponent<Props, State> {
  componentDidMount() {
    setTimeout(() => {
      console.log('start componentDidMount');
      this.props.getStars();
      console.log('end componentDidMount');
    }, 1000);
  }
  render() {
    const { isFetching, stars } = this.props;
    return (
      <MiddleLayout route={'news'}>
        <div>
          News {`isFetching=${isFetching}, stars count=${stars}`}
        </div>
      </MiddleLayout>
    );
  }
}
const mapStateToProps = (state: any) => ({
  stars: state.stars.count,
  isFetching: state.stars.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    getStars: () => {
      // getStarsEx1()(dispatch);
    }

  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(News);
