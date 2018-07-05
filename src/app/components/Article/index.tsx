import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, TCategory } from 'core/types';

import { ArticleHeader } from 'components/Article/ArticleHeader';
import { ArticleProducts } from 'components/Article/ArticleProducts';
import { ArticleContent } from 'components/Article/ArticleContent';
import { selectCategory, getCategoryCaption } from 'core/catalog/categories/selectors';

type OwnProps = {
  routeParams?: any;
};
type StateProps = {
  category: TCategory;
  categoryCaption: string;
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class ArticleComponent extends React.PureComponent<Props, State> {
  render() {
    const { category, categoryCaption } = this.props;
    return (
      <div>
        <ArticleHeader category={category} categoryCaption={categoryCaption} />
        <ArticleProducts category={category} />
        <ArticleContent category={category} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, props: OwnProps) => {
  const category = selectCategory(state, props.routeParams.category);
  return {
    category,
    categoryCaption: getCategoryCaption(state, category),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export const Article = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ArticleComponent);