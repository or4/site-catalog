import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import { TItem, selectItems } from 'core/catalog/items/reducer';
import MiddleLayout from 'components/MiddleLayout';
import { selectCategory, TCategory } from 'core/catalog/categories/reducer';

type OwnProps = {
  routeParams: any;
};
type StateProps = {
  category: TCategory;
  items: TItem[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class Products extends React.PureComponent<Props, State> {
  state = {};
  // static getDerivedStateFromProps({ loadItems, items, routeParams, }: Props) {
  //   if (typeof items === 'undefined' || items.length === 0) {
  //     const { category } = routeParams;
  //     console.log('******** Products componentDidMount load action, category=', category);
  //     loadItems(category, 0, 500);
  //   }
  //   return {};
  // }

  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  getArticle = () => {
    return {
      __html: this.props.category && this.props.category.description
    };
  }
  render() {
    const style = this.getStyle();
    const { routeParams, items, category } = this.props;
    console.log('routeParams', routeParams);
    console.log('routeParams.category', routeParams.category);
    // console.log('this.props', this.props);
    // console.log('Products items', items);

    console.log('render category', category);


    return (
      <MiddleLayout route={'/catalog'}>
        <h2>Catalog {category && category.name}</h2>
        <div dangerouslySetInnerHTML={this.getArticle()} />
        <ul>
          {items && items.map((item: TItem) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </MiddleLayout>
    );
  }
}
const mapStateToProps = (state: AppState, props: OwnProps) => {
  const items = selectItems(state, props.routeParams.category);
  const category = selectCategory(state, props.routeParams.category);
  return {
    items,
    category,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Products);
