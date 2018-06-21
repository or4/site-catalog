import React from 'react';
import { isSmall, isInitial } from 'util/responsive';
import { flexRow } from 'ui/theme';
import { join } from 'util/helpers';
import PagesBlock from 'ui/Paging/PagesBlock';
import AmountBlock from 'ui/Paging/AmountBlock';

import jss from 'jss';
import preset from 'jss-preset-default';
import { log } from 'util/logger';
jss.setup(preset());

const getClasses = () => {
  const container = {
    ...flexRow()
  };
  const pagesContainer = {
    margin: '0 auto 0 0'
  };
  const amountContainer = {
    margin: '0 0 0 auto'
  };
  return {
    container,
    pagesContainer,
    amountContainer,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
  className?: string;
  onPagesClick?: (data: string) => void;
  onAmountClick?: (data: string) => void;
};
type State = {
};

class Paging extends React.PureComponent<Props, State> {
  onPagesClick = (data: string) => {
    log('onPagesClick', data);
  }
  onAmountClick = (data: string) => {
    log('onAmountClick', data);
  }
  render() {
    if (isInitial()) {
      return null;
    }

    const { className, } = this.props;
    return (
      <div className={join(classes.container, className)}>
        <PagesBlock onClick={this.onPagesClick} className={classes.pagesContainer} isSmall={isSmall()} />
        <AmountBlock onClick={this.onAmountClick} className={classes.amountContainer} isSmall={isSmall()} />
      </div>);
  }
}
export default Paging;
