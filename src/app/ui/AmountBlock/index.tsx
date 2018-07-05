import React from 'react';
import { join } from 'utils';
import { AmountItemsType } from 'core/types';
import { AmountBlockMedium } from './AmountBlockMedium';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    display: 'flex',
  };
  return {
    container,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
  amountItems: AmountItemsType;
  className?: string;
  isSmall: boolean;
  onClick: (amountItems: AmountItemsType) => void;
};
type State = {
};

export class AmountBlock extends React.PureComponent<Props, State> {
  render() {
    const { amountItems, className, isSmall, onClick } = this.props;
    return (
      <div className={join(classes.container, className)}>
        <AmountBlockMedium amountItems={amountItems} onClick={onClick} />
      </div>
    );
  }
}
