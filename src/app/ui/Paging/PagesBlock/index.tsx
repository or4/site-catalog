import React from 'react';
import PagesBlockSmall from './PagesBlockSmall';
import PagesBlockMedium from './PagesBlockMedium';

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
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
  onClick: (data: string) => void;
};
type State = {
};

class PagesBlock extends React.PureComponent<Props, State> {
  render() {
    const { className, isSmall, onClick } = this.props;
    return (
      <div className={join(classes.container, className)}>
        {isSmall ? <PagesBlockSmall /> : <PagesBlockMedium />}
      </div>
    );
  }
}
export default PagesBlock;
