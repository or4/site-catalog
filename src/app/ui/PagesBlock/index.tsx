import React from 'react';
import { PagesBlockSmall } from './PagesBlockSmall';
import { PagesBlockMedium } from './PagesBlockMedium';
import { join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    display: 'flex',
  },
  next: {
    marginRight: '13px',
  },
  prev: {
    marginLeft: '13px',
  },
};

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;

type Props = {
  className?: string;
  isSmall: boolean;
  onClick: (page: number) => void;
  page: number;
  totalPages: number;
};
type State = {
};

export class PagesBlock extends React.PureComponent<Props, State> {
  render() {
    const { className, isSmall, onClick, page, totalPages } = this.props;
    const content = isSmall ? <PagesBlockSmall onClick={onClick} page={page} totalPages={totalPages} /> :
      <PagesBlockMedium onClick={onClick} page={page} totalPages={totalPages} />;

    return (
      <div className={join(classes.container, className)}>
        {content}
      </div>
    );
  }
}
