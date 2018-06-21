import React from 'react';
import PageButtonSmallNext from './PageButtonSmallNext';
import PageButtonSmallPrev from './PageButtonSmallPrev';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    display: 'flex',
  };
  const next = {
  };
  const prev = {
  };
  return {
    container,
    next,
    prev,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
};
type State = {
};

class PagesBlockSmall extends React.PureComponent<Props, State> {
  render() {
    //const {  } = this.props;
    return (
      <div className={classes.container}>
        <PageButtonSmallNext className={classes.next} />
        <PageButtonSmallPrev className={classes.prev} />
      </div>
    );
  }
}
export default PagesBlockSmall;
