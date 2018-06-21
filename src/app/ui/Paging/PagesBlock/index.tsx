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
  onClick: (page: number) => void;
  page: number;
  totalPages: number;
};
type State = {
};

class PagesBlock extends React.PureComponent<Props, State> {
  render() {
    const { className, isSmall, onClick, page, totalPages } = this.props;
    return (
      <div className={join(classes.container, className)}>
        {isSmall ? <PagesBlockSmall onClick={onClick} page={page} totalPages={totalPages} /> : <PagesBlockMedium onClick={onClick} page={page} totalPages={totalPages} />}
      </div>
    );
  }
}
export default PagesBlock;
