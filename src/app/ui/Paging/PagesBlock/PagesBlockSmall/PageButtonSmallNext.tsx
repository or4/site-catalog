import React from 'react';
import PageButtonBase from '../common/PageButtonBase';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

type Props = {
};
type State = {
};

const getClasses = () => {
  const button = {
    textAlign: 'center' as 'center',
    width: '32px',
  };

  return {
    button,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

class PageButtonSmallNext extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageButtonBase borderRadius={'right'} className={classes.button}>
        {this.props.children}
      </PageButtonBase>
    );
  }
}
export default PageButtonSmallNext;
