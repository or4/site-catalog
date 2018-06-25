import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import { TItem, selectItemsByCategory } from 'core/catalog/items/reducer';
import MiddleLayout from 'components/MiddleLayout';
import { selectCategory } from 'core/catalog/categories/reducer';
import { getCategoryCaption } from 'core/catalog/categories/common';
import { TCategory } from 'core/catalog/categories/types';
import { convertImgUrl } from 'core/common';
import { log } from 'util/logger';
import Paging from 'ui/Paging';

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
  page: number;
  totalPages: number;
};

class Products extends React.PureComponent<Props, State> {
  state = { page: 1, totalPages: 10 }
  getArticle = () => ({ __html: convertImgUrl(this.props.categoryDescription) });
  getCaption = () => getCategoryCaption(this.props.categoryId, this.props.selectCategory);

  onPagesClick = (page: number) => {
    this.setState({ page, });
    console.log('state page', page);
  }
  render() {
    log('Catalog render');
    const { page, totalPages } = this.state;
    return (
      <MiddleLayout route={'/catalog'}>
        <Paging page={page} totalPages={totalPages} onPagesClick={this.onPagesClick} />
        <h2>Цены на товары категории «{this.getCaption()}» на 23.05.2018 в тенге с учетом НДС</h2>
        <ul>
          {this.props.items.map((item: TItem) => <li key={item.id}>{item.name}</li>)}
        </ul>
        <div className={'article-description'} dangerouslySetInnerHTML={this.getArticle()} />
      </MiddleLayout>
    );
  }
}


const mapStateToProps = (state: AppState, props: OwnProps) => {
  const items = selectItemsByCategory(state, props.routeParams.category);
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
