import React from 'react';
import AmountBlockMedium from 'ui/Paging/AmountBlock/AmountBlockMedium';

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
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

export type AmountType = 'small' | 'medium' | 'large' | 'all';


type Props = {
  className?: string;
  isSmall: boolean;
  onClick: () => void;
};
type State = {
};

class AmountBlock extends React.PureComponent<Props, State> {
  render() {
    const { className, isSmall, onClick } = this.props;
    return (
      <div className={join(classes.container, className)}>
        <AmountBlockMedium onClick={onClick} />
      </div>
    );
  }
}
export default AmountBlock;
