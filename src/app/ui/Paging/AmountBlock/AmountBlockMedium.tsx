import React from 'react';
import AmountBlockMediumItem from 'ui/Paging/AmountBlock/AmountBlockMediumItem';

import jss from 'jss';
import preset from 'jss-preset-default';
import { flexRow } from 'ui/theme';
jss.setup(preset());

const getClasses = () => {
  const container = {
    ...flexRow('center', 'center'),
  };
  return {
    container,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
};
type State = {
};

class AmountBlockMedium extends React.PureComponent<Props, State> {
  render() {
    //const {  } = this.props;
    return (
      <div className={classes.container}>
        <AmountBlockMediumItem>50</AmountBlockMediumItem>
        <AmountBlockMediumItem>150</AmountBlockMediumItem>
        <AmountBlockMediumItem>300</AmountBlockMediumItem>
        <AmountBlockMediumItem>все</AmountBlockMediumItem>
      </div>
    );
  }
}
export default AmountBlockMedium;
