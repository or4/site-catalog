import React from 'react';
import { isSmall, isInitial } from 'util/responsive';
import PagesBlock from 'ui/Paging/PagesBlock';
import AmountBlock from 'ui/Paging/AmountBlock';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    display: 'flex',
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
};
type State = {
};

class Paging extends React.PureComponent<Props, State> {
  render() {
    if (isInitial()) {
      return null;
    }

    const { className } = this.props;
    return (
      <div className={[classes.container, className].join(' ')}>
        <PagesBlock className={classes.pagesContainer} isSmall={isSmall()} />
        <AmountBlock className={classes.amountContainer} isSmall={isSmall()} />
      </div>);
  }
}
export default Paging;
