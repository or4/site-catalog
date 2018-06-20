import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import MiddleLayout from 'components/MiddleLayout';
import { log } from 'util/logger';

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

class Products extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    log('About render');
    // const style = this.getStyle();
    // const { items } = this.props;
    // {items && items.map((item: TItem) => <li key={item.id}>{item.name}</li>)}
    // log('Products items', this.props.items);

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
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Products);
