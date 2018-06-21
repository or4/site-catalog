import React from 'react';
import AmountBlockMediumItemBase from 'ui/Paging/AmountBlock/AmountBlockMediumItemBase';
import { flexRow } from 'ui/theme';
import { join } from 'util/helpers';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    width: '32px',
    ...flexRow('center', 'center'),
  };
  return {
    container,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
  className?: string;
};
type State = {
};

class AmountBlockMediumItem extends React.PureComponent<Props, State> {
  render() {
    const { className } = this.props;
    return (
      <AmountBlockMediumItemBase className={join(classes.container, className)} >
        {this.props.children}
      </AmountBlockMediumItemBase>
    );
  }
}
export default AmountBlockMediumItem;
