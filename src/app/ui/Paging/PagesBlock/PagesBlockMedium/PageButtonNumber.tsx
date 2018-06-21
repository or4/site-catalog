import React from 'react';
import jss from 'jss';
import PageButtonBase from '../common/PageButtonBase';

type Props = {
};
type State = {
};

const getClasses = () => {
  const button = {
    background: 'green',
    textAlign: 'center' as 'center',
    width: '32px',
  };

  return {
    button,
  };
};


const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

class PageButtonNumber extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageButtonBase className={classes.button}>
        {this.props.children}
      </PageButtonBase>
    );
  }
}
export default PageButtonNumber;
