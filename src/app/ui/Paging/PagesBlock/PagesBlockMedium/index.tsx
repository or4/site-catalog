import React from 'react';
import PageButtonMediumNext from './PageButtonMediumNext';
import PageButtonNumber from './PageButtonNumber';
import PageButtonMediumPrev from './PageButtonMediumPrev';

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
import { getPrevPage, getNextPage } from 'util/pages';
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

class PagesBlockMedium extends React.PureComponent<Props, State> {
  onPrevClick = () => { this.props.onClick(getPrevPage(this.props.page, 1)) }
  onItem1Click = () => { this.props.onClick(getPrevPage(this.props.page, 2)) }
  onItem2Click = () => { this.props.onClick(getPrevPage(this.props.page, 1)) }

  onItem3Click = () => { this.props.onClick(this.props.page) }

  onNextClick = () => { this.props.onClick(getNextPage(this.props.page, 1, this.props.totalPages)) }
  onItem4Click = () => { this.props.onClick(getNextPage(this.props.page, 1, this.props.totalPages)) }
  onItem5Click = () => { this.props.onClick(getNextPage(this.props.page, 2, this.props.totalPages)) }

  // getRadiusType = (index: number, page: number, total: number) => {
  //   isExist(index, page)

  // }
  // isExist =
  // getItem = (index: number, page: number, total: number) => {
  //   const newPage = page + index;
  //   if (newPage >= 1 && newPage <= total) {
  //     return true;
  //   }

  // }
  render() {
    const { className } = this.props;
    return (
      <div className={join(classes.container, className)}>
        <PageButtonMediumPrev className={classes.prev} />
        {(this.props.page - 2) >= 1 ? <PageButtonNumber borderRadius={'left'}> {this.props.page - 2} </PageButtonNumber> : null}
        <PageButtonNumber borderRadius={'none'}> {this.props.page - 1} </PageButtonNumber>
        <PageButtonNumber borderRadius={'none'}> {this.props.page} </PageButtonNumber>
        <PageButtonNumber borderRadius={'none'}> {this.props.page + 1} </PageButtonNumber>
        <PageButtonNumber borderRadius={'right'}> {this.props.page + 2} </PageButtonNumber>
        <PageButtonMediumNext className={classes.next} />
      </div>
    );
  }
}
export default PagesBlockMedium;
