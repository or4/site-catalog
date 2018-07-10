import React from 'react';
import { TCategory } from 'core/types';
import { convertImgUrl } from 'utils';
import { theming } from 'ui';

type Props = {
  category: TCategory;
};
type State = {
};

export class ArticleContent extends React.PureComponent<Props, State> {

  getStyle = () => {
    const container = {
      ...theming('scene-products-description'),
    };
    return {
      container,
    };
  }
  getArticle = () => ({
    __html: convertImgUrl(this.props.category && this.props.category.description)
  });

  render() {
    return (
      <div className={'article-description'} style={this.getStyle().container} dangerouslySetInnerHTML={this.getArticle()} />
    );
  }
}

/*
  minHeight: '600px',
  defaultMargin1: '20px',
  devBorder: '1px solid #aaa'
*/