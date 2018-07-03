import React from 'react';
import { TCategory } from 'core/catalog/categories/types';

type Props = {
  category: TCategory;
  categoryCaption: string;
};
type State = {
};

export class ArticleHeader extends React.PureComponent<Props, State> {
  render() {
    const { category, categoryCaption } = this.props;
    return (
      <h2>Цены на товары категории «{categoryCaption}» на 23.05.2018 в тенге с учетом НДС</h2>
    );
  }
}
