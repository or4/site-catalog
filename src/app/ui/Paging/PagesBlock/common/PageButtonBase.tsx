import React from 'react';
import { theme, flexRow } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

type Props = {
  className?: string;
};
type State = {
};

const getClasses = () => {
  const container = {
    background: 'transparent' as 'transparent',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '3px',
    cursor: 'pointer',
    height: '28px',
    transition: '.1s ease-out',

    ...theme.paging.text,
    ...flexRow('center', 'center'),

    '&:hover': {
      border: '1px solid rgba(0, 0, 0, 0.3)',
    }
  };

  return {
    container,
  };
};


const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

class PageButtonBase extends React.PureComponent<Props, State> {
  render() {
    const { className } = this.props;
    return (
      <div className={[classes.container, className].join(' ')}>
        {this.props.children}
      </div>
    );
  }
}
export default PageButtonBase;
