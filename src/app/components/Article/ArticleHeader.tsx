import React from 'react';
import { TCategory } from 'core/types';
import { theming } from 'ui';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    margin: '12px 0',
    ...theming('scene-products-title'),
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();


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
      <h2 className={classes.container}>
        Цены на товары категории «{categoryCaption}» на 23.05.2018 в тенге с учетом НДС
      </h2>
    );
  }
}
