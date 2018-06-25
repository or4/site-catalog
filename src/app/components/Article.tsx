import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';

import { getCategoryCaption } from 'core/catalog/categories/common';
import { convertImgUrl } from 'core/common';
import { TItem, selectItemsByCategory } from 'core/catalog/items/reducer';
import { TCategory } from 'core/catalog/categories/types';
import { selectCategory } from 'core/catalog/categories/reducer';


type OwnProps = {
  routeParams?: any;
};
type StateProps = {
  categoryId: string;
  categoryDescription: string;
  selectCategory: (category: string) => TCategory;
  selectItems: () => TItem[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};


class Article extends React.PureComponent<Props, State> {
  getArticle = () => ({ __html: convertImgUrl(this.props.categoryDescription) });
  getCaption = () => getCategoryCaption(this.props.categoryId, this.props.selectCategory);


  render() {
    //const {  } = this.props;
    return (
      <div>
        <h2>Цены на товары категории «{this.getCaption()}» на 23.05.2018 в тенге с учетом НДС</h2>
        <ul>
          {this.props.selectItems().map((item: TItem) => <li key={item.id}>{item.name}</li>)}
        </ul>
        <div className={'article-description'} dangerouslySetInnerHTML={this.getArticle()} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, props: OwnProps) => {
  const category = selectCategory(state, props.routeParams.category);
  return {
    selectItems: selectItemsByCategory.bind(null, state, props.routeParams.category),
    categoryDescription: category && category.description || '',
    categoryId: props.routeParams.category,
    selectCategory: selectCategory.bind(null, state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Article);