import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import { Category } from 'core/catalog/categories/reducer';

type OwnProps = {
};
type StateProps = {
  categories: Category[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class NavigationTree extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    // const style = this.getStyle();
    // const {  } = this.props;
    return (
      <div>
        {this.props.categories && this.props.categories.map((item) => <div key={item.id}>{item.name}</div>)}
      </div>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  categories: state.categories.data
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {

  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(NavigationTree);
