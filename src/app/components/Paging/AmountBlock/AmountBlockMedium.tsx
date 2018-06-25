import React from 'react';
import { flexRow } from 'ui/theme';
import { amountItemsKeys, AmountItemsType, amountItems } from 'core/settings/amountItems/common';
import AmountBlockMediumItem from './AmountBlockMediumItem';

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
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
  const selected = {
    fontWeight: 'bold' as 'bold',
    textDecoration: 'underline',
  };
  return {
    container,
    item,
    itemAll,
    selected,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
  amountItems: AmountItemsType;
  onClick: (amountItems: AmountItemsType) => void;
};
type State = {
};

class AmountBlockMedium extends React.PureComponent<Props, State> {
  content: Array<any>;
  componentDidMount() {

    // this.forceUpdate();
  }
  getClassName = (classes: any, index: number, lastIndex: number) => (index !== lastIndex ? classes.item : classes.itemAll);

  render() {

    const { amountItems: amountItemsProps, onClick } = this.props;

    const lastIndex = amountItemsKeys.length - 1;
    const content = amountItemsKeys.map(
      (key: AmountItemsType, index: number) => (
        <AmountBlockMediumItem
          className={join(this.getClassName(classes, index, lastIndex), amountItemsProps === key ? classes.selected : '')}
          key={key}
          onClick={onClick.bind(null, key)}
        >
          {amountItems[key]}
        </AmountBlockMediumItem>
      )
    );

    return (
      <div className={classes.container}>
        {content}
      </div>
    );
  }
}
export default AmountBlockMedium;
