import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import { TItem, selectItems } from 'core/catalog/items/reducer';
import MiddleLayout from 'components/MiddleLayout';
import { selectCategory } from 'core/catalog/categories/reducer';
import { getCategoryCaption } from 'core/catalog/categories/common';
import { TCategory } from 'core/catalog/categories/types';
import { convertImgUrl } from 'core/common';
import { log } from 'util/logger';

type OwnProps = {
  routeParams: any;
};
type StateProps = {
  categoryId: string;
  categoryDescription: string;
  items: TItem[];
  selectCategory: (category: string) => TCategory;
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class Products extends React.PureComponent<Props, State> {

  getArticle = () => ({ __html: convertImgUrl(this.props.categoryDescription) });
  getCaption = () => getCategoryCaption(this.props.categoryId, this.props.selectCategory);

  render() {
    log('About render');
    return (
      <MiddleLayout route={'/catalog'}>
        <h2>Цены на товары категории «{this.getCaption()}» на 23.05.2018 в тенге с учетом НДС</h2>
        <ul>
          {this.props.items.map((item: TItem) => <li key={item.id}>{item.name}</li>)}
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
    categoryDescription: category && category.description || '',
    categoryId: props.routeParams.category,
    selectCategory: selectCategory.bind(null, state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Products);
