import React from 'react';
import { theme, flexRow } from 'ui/theme';
import { join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    background: 'transparent' as 'transparent',
    textDecoration: 'none' as 'none',
    cursor: 'pointer',
    height: '28px',
    transition: '.1s ease-out',

    ...theme.paging.text,
    ...flexRow('center', 'center'),

    '&:hover': {
      textDecoration: 'underline' as 'underline',
    }
  };

  return {
    container,
  };
};

type Props = {
  className?: string;
  onClick: () => void;
};
type State = {
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

export class AmountBlockMediumItemBase extends React.PureComponent<Props, State> {
  render() {
    const { className, onClick } = this.props;
    return (
      <div className={join(classes.container, className)} onClick={onClick} >
        {this.props.children}
      </div>
    );
  }
}
