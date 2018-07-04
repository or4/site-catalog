import React from 'react';
import { PageButtonMediumNext } from './PageButtonMediumNext';
import { PageButtonNumber } from './PageButtonNumber';
import { PageButtonMediumPrev } from './PageButtonMediumPrev';
import { join } from 'util/helpers';
import { getPrevPage, getNextPage } from 'util/pages';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    display: 'flex',
  };
  const prev = {
    marginRight: '13px',
  };
  const next = {
    marginLeft: '13px',
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
  className?: string;
  onClick: (page: number) => void;
  page: number;
  totalPages: number;
};
type State = {
};
const pagesItems = ['prev', 'next', 'item1', 'item2', 'item3', 'item4', 'item5`'];

export class PagesBlockMedium extends React.PureComponent<Props, State> {
  onPrevClick = () => { this.props.onClick(getPrevPage(this.props.page, 1)) }
  onItem1Click = () => { this.props.onClick(getPrevPage(this.props.page, 2)) }
  onItem2Click = () => { this.props.onClick(getPrevPage(this.props.page, 1)) }

  onItem3Click = () => { this.props.onClick(this.props.page) }

  onItem4Click = () => { this.props.onClick(getNextPage(this.props.page, 1, this.props.totalPages)) }
  onItem5Click = () => { this.props.onClick(getNextPage(this.props.page, 2, this.props.totalPages)) }
  onNextClick = () => { this.props.onClick(getNextPage(this.props.page, 1, this.props.totalPages)) }

  // getRadiusType = (index: number, page: number, total: number) => {
  //   isExist(index, page)

  // }
  // isExist =
  exists = (index: number, page: number, total: number) => {
    const newPage = page + index;
    if (newPage >= 1 && newPage <= total) {
      return true;
    }
    return false;
  }

  getRadiusType = (index: number, page: number, total: number) => {

    const currentExists = this.exists(index, page, total);
    if (!currentExists) {
      return 'none';
    }

    const prevExists = this.exists(index - 1, page, total);
    const nextExists = this.exists(index + 1, page, total);

    if (!prevExists && !nextExists) {
      return 'full';
    } else if (!prevExists || index === -2) {
      return 'left';
    } else if (!nextExists || index === 2) {
      return 'right';
    } else {
      return 'none';
    }
  }

  render() {
    const { className, page, totalPages } = this.props;
    if (totalPages === 1) {
      return null;
    }
    return (
      <div className={join(classes.container, className)}>
        <PageButtonMediumPrev className={classes.prev} onClick={this.onPrevClick} hidden={page !== totalPages} />

        <PageButtonNumber borderRadius={this.getRadiusType(-1, page, totalPages)} hidden={!this.exists(-1, page, totalPages)} onClick={this.onItem2Click}> {page - 1} </PageButtonNumber>
        <PageButtonNumber borderRadius={this.getRadiusType(0, page, totalPages)} hidden={!this.exists(0, page, totalPages)} isActive={true} onClick={this.onItem3Click}> {page} </PageButtonNumber>
        <PageButtonNumber borderRadius={this.getRadiusType(1, page, totalPages)} hidden={!this.exists(1, page, totalPages)} onClick={this.onItem4Click} > {page + 1} </PageButtonNumber>
        <PageButtonNumber borderRadius={this.getRadiusType(2, page, totalPages)} hidden={!this.exists(2, page, totalPages)} onClick={this.onItem5Click} > {page + 2} </PageButtonNumber>

        <PageButtonMediumNext className={classes.next} onClick={this.onNextClick} hidden={!this.exists(1, page, totalPages)} />
      </div>
    );
  }
}
