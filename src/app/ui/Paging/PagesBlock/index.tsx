import React from 'react';
import PagesBlockSmall from './PagesBlockSmall';
import PagesBlockMedium from './PagesBlockMedium';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    display: 'flex',
  };
  const next = {
    marginRight: '13px',
  };
  const prev = {
    marginLeft: '13px',
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
  className?: string;
  isSmall: boolean;
};
type State = {
};

class PagesBlock extends React.PureComponent<Props, State> {
  render() {
    const { className, isSmall } = this.props;
    return (
      <div className={[classes.container, className].join(' ')}>
        {isSmall ? <PagesBlockSmall /> : <PagesBlockMedium />}
      </div>
    );
  }
}
export default PagesBlock;
