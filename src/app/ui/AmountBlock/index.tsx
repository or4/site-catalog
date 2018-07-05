import React from 'react';
import { join } from 'utils';
import { AmountItemsType } from 'core/types';
import { AmountBlockMedium } from './AmountBlockMedium';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    display: 'flex',
  }
};

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;

type Props = {
  amountItems: AmountItemsType;
  className?: string;
  isSmall: boolean;
  onClick: (amountItems: AmountItemsType) => void;
  style?: any;
};
type State = {
};

export class AmountBlock extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: '',
    style: {},
  }

  render() {
    const { amountItems, className, onClick, style } = this.props;
    return (
      <div style={style} className={join(classes.container, className)}>
        <AmountBlockMedium amountItems={amountItems} onClick={onClick} />
      </div>
    );
  }
}
