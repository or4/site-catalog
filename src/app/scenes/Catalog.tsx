import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import { TItem, selectItems } from 'core/catalog/items/reducer';
import MiddleLayout from 'components/MiddleLayout';
import { selectCategory } from 'core/catalog/categories/reducer';
import { getCategoryCaption } from 'core/catalog/categories/common';
import { TCategory } from 'core/catalog/categories/types';

type OwnProps = {
  routeParams: any;
};
type StateProps = {
  category: TCategory;
  items: TItem[];
  selectCategory: (category: string) => TCategory;
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

      __html: this.props.category && this.props.category.description &&
      this.props.category.description.replace(/src=\"/g, 'src="http://rti-ck.kz/')
    };
  }
  getCaption = () => {
    const { routeParams, selectCategory } = this.props;
    return getCategoryCaption(routeParams.category, selectCategory);
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
        <h2>Цены на товары категории «{this.getCaption()}» на 23.05.2018 в тенге с учетом НДС</h2>
        <ul>
          {items && items.map((item: TItem) => <li key={item.id}>{item.name}</li>)}
        </ul>
        <div dangerouslySetInnerHTML={this.getArticle()} />
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
    selectCategory: selectCategory.bind(null, state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Products);
