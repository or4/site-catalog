import React from 'react';
import AmountBlockMediumItem from 'ui/Paging/AmountBlock/AmountBlockMediumItem';
import { flexRow } from 'ui/theme';
import { amountItemsKeys, AmountItemsType, amountItems } from 'core/settings/amountItems/common';

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
  onClick: (amountItems: AmountItemsType) => void;
};
type State = {
};

class AmountBlockMedium extends React.PureComponent<Props, State> {
  content: Array<any>;
  componentDidMount() {
    const { onClick } = this.props;

    const getClassName = (classes: any, index: number, lastIndex: number) => (index !== lastIndex ? classes.item : classes.itemAll);
    const lastIndex = amountItemsKeys.length - 1;
    this.content = amountItemsKeys.map(
      (key: AmountItemsType, index: number) => (
        <AmountBlockMediumItem className={getClassName(classes, index, lastIndex)} key={key} onClick={onClick.bind(null, key)}>
          {amountItems[key]}
        </AmountBlockMediumItem>
      )
    );

    this.forceUpdate();
  }
  render() {
    return (
      <div className={classes.container}>
        {this.content}
      </div>
    );
  }
}
export default AmountBlockMedium;
