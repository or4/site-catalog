import React from 'react';
import { flexRow } from 'ui/theme';
import { join } from 'utils';
import { AmountBlockMediumItemBase } from './AmountBlockMediumItemBase';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    width: '32px',
    ...flexRow('center', 'center'),
  },
};

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;

type Props = {
  className?: string;
  onClick: () => void;
};
type State = {
};

export class AmountBlockMediumItem extends React.PureComponent<Props, State> {
  render() {
    const { className, onClick } = this.props;
    return (
      <AmountBlockMediumItemBase className={join(classes.container, className)} onClick={onClick}>
        {this.props.children}
      </AmountBlockMediumItemBase>
    );
  }
}
