import React from 'react';
import { theme } from 'ui/theme';
import jss from 'jss';

type Props = {
  className: string;
};
type State = {
};

const getClasses = () => {
  const button = {
    background: 'transparent' as 'transparent',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '3px',
    cursor: 'pointer',
    height: '28px',
    transition: '.1s ease-out',

    ...theme.paging.text,

    '&:hover': {
      border: '1px solid rgba(0, 0, 0, 0.3)',
    }
  };

  return {
    button,
  };
};


const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

class PageButtonBase extends React.PureComponent<Props, State> {
  render() {
    const { className } = this.props;
    return (
      <div className={[classes.button, className].join(' ')}>
        {this.props.children}
      </div>
    );
  }
}
export default PageButtonBase;
