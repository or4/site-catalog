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
  onClick: (page: number) => void;
  page: number;
  totalPages: number;
};
type State = {
};

class PagesBlockSmall extends React.PureComponent<Props, State> {
  render() {
    //const {  } = this.props;
    return (
      <div className={classes.container}>
        <PageButtonSmallPrev className={classes.prev} />
        <PageButtonSmallNext className={classes.next} />
      </div>
    );
  }
}
export default PagesBlockSmall;
