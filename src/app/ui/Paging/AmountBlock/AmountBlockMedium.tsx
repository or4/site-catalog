import React from 'react';
import AmountBlockMediumItem from 'ui/Paging/AmountBlock/AmountBlockMediumItem';
import { flexRow } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
import { amountValues } from 'ui/Paging/AmountBlock';
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
  onClick: (data: string) => void;
};
type State = {
};

class AmountBlockMedium extends React.PureComponent<Props, State> {
  content: Array<any>;
  componentDidMount() {
    const { onClick } = this.props;

    console.log('amountValues', amountValues);

    const lastIndex = amountValues.length - 1;
    this.content = amountValues.map(
      (value: string, index: number) => (
        <AmountBlockMediumItem
          className={index !== lastIndex ? classes.item : classes.itemAll}
          key={value}
          onClick={onClick.bind(null, value)}
        >
          {value}
        </AmountBlockMediumItem>
      )
    );
    console.log('this.content', this.content);

    this.forceUpdate();

  }
  render() {
    console.log('render this.content', this.content);
    return (
      <div className={classes.container}>
        {this.content}
      </div>
    );
  }
}
export default AmountBlockMedium;
