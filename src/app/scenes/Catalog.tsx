import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import { TItem } from 'core/catalog/items/reducer';
import MiddleLayout from 'components/MiddleLayout';
import { ActionTypes as ItemsActionTypes, loadItems } from 'core/catalog/items/actions';

type OwnProps = {
  routeParams: any;
};
type StateProps = {
  items: TItem[];
};
type DispatchProps = {
  loadItems: (category: string, page: number, limit: number) => void;
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class Products extends React.PureComponent<Props, State> {
  state = {};
  static getDerivedStateFromProps({ loadItems, items, routeParams, }: Props) {
    if (typeof items === 'undefined' || items.length === 0) {
      const { category } = routeParams;
      console.log('******** Products componentDidMount load action, category=', category);
      loadItems(category, 1, 5);
    }
    return {};
  }

  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    // const style = this.getStyle();
    const { routeParams, items } = this.props;
    console.log('routeParams', routeParams);
    console.log('routeParams.category', routeParams.category);
    console.log('this.props', this.props);
    // console.log('Products items', this.props.items);

    return (
      <MiddleLayout route={'/catalog'}>
        <ul>
          {items && items.map((item: TItem) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </MiddleLayout>
    );
  }
}
const mapStateToProps = (state: AppState, props: OwnProps) => ({
  items: state.items.data[props.routeParams]
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    loadItems: (category: string, page: number, limit: number) => {
      dispatch(loadItems(category, page, limit));
    },

  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Products);
