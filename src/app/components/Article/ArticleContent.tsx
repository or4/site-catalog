import React from 'react';
import { TCategory } from 'core/types';
import { convertImgUrl } from 'utils';

type Props = {
  category: TCategory;
};
type State = {
};

export class ArticleContent extends React.PureComponent<Props, State> {
  getArticle = () => ({
    __html: convertImgUrl(this.props.category && this.props.category.description)
  });

  render() {
    return (
      <div className={'article-description'} dangerouslySetInnerHTML={this.getArticle()} />
    );
  }
}