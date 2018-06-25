import React from 'react';
import { getCategoryCaption } from 'core/catalog/categories/common';
import { TCategory } from 'core/catalog/categories/types';

type Props = {
  categoryId: string;
  selectCategory: (category: string) => TCategory;
};
type State = {
};

class Header extends React.PureComponent<Props, State> {
  getCaption = () => getCategoryCaption(this.props.categoryId, this.props.selectCategory);
  render() {
    return (
      <h2>Цены на товары категории «{this.getCaption()}» на 23.05.2018 в тенге с учетом НДС</h2>
    );
  }
}
export default Header;
