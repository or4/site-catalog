import React from 'react';
import { isSmall, isInitial } from 'util/responsive';
import { flexRow } from 'ui/theme';
import { join } from 'util/helpers';
import PagesBlock from 'ui/Paging/PagesBlock';
import AmountBlock from 'ui/Paging/AmountBlock';

import jss from 'jss';
import preset from 'jss-preset-default';
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
  onPagesClick?: () => void;
  onAmountClick?: () => void;
};
type State = {
};

class Paging extends React.PureComponent<Props, State> {
  render() {
    if (isInitial()) {
      return null;
    }

    const { className, onPagesClick, onAmountClick } = this.props;
    return (
      <div className={join(classes.container, className)}>
        <PagesBlock onClick={onPagesClick} className={classes.pagesContainer} isSmall={isSmall()} />
        <AmountBlock onClick={onAmountClick} className={classes.amountContainer} isSmall={isSmall()} />
      </div>);
  }
}
export default Paging;
