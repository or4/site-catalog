import React from 'react';
import { PageButtonSmallNext } from './PageButtonSmallNext';
import { PageButtonSmallPrev } from './PageButtonSmallPrev';
import { getPrevPage, getNextPage } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    display: 'flex',
  };
  const next = {
  };
  const prev = {
  };
  return {
    container,
    next,
    prev,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
  onClick: (page: number) => void;
  page: number;
  totalPages: number;
};
type State = {
};

export class PagesBlockSmall extends React.PureComponent<Props, State> {
  onPrevClick = () => {
    const { onClick, page, } = this.props;
    onClick && onClick(getPrevPage(page, 1));
  }
  onNextClick = () => {
    const { onClick, page, totalPages, } = this.props;
    onClick && onClick(getNextPage(page, 1, totalPages));
  }
  render() {
    //const {  } = this.props;
    return (
      <div className={classes.container}>
        <PageButtonSmallPrev className={classes.prev} onClick={this.onPrevClick} />
        <PageButtonSmallNext className={classes.next} onClick={this.onNextClick} />
      </div>
    );
  }
}
