import React from 'react';
import { convertImgUrl } from 'core/common';
import { TCategory } from 'core/catalog/categories/types';

type Props = {
  category: TCategory;
};
type State = {
};

class ArticleContent extends React.PureComponent<Props, State> {
  getArticle = () => ({
    __html: convertImgUrl(this.props.category && this.props.category.description)
  });

  render() {
    return (
      <div className={'article-description'} dangerouslySetInnerHTML={this.getArticle()} />
    );
  }
}
export default ArticleContent;
