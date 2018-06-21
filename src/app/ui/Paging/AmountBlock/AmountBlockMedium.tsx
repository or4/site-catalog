import React from 'react';
import AmountBlockMediumItem from 'ui/Paging/AmountBlock/AmountBlockMediumItem';
import { flexRow } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    ...flexRow('center', 'center'),
  };
  const item = {
    padding: '0 5px',
  };
  const itemAll = {
    padding: '0 0 0 5px',
  };
  return {
    container,
    item,
    itemAll,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
  onClick: () => void;
};
type State = {
};

class AmountBlockMedium extends React.PureComponent<Props, State> {
  render() {
    const { onClick } = this.props;
    return (
      <div className={classes.container}>
        <AmountBlockMediumItem onClick={onClick} className={classes.item}>50</AmountBlockMediumItem>
        <AmountBlockMediumItem onClick={onClick} className={classes.item}>150</AmountBlockMediumItem>
        <AmountBlockMediumItem onClick={onClick} className={classes.item}>300</AmountBlockMediumItem>
        <AmountBlockMediumItem onClick={onClick} className={classes.itemAll}>все</AmountBlockMediumItem>
      </div>
    );
  }
}
export default AmountBlockMedium;
