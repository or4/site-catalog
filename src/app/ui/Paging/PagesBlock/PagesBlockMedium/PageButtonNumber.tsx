import React from 'react';
import PageButtonBase from '../common/PageButtonBase';

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
    width: '32px',
  };
  return {
    container,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

class PageButtonNumber extends React.PureComponent<Props, State> {
  render() {
    const { className } = this.props;
    return (
      <PageButtonBase className={[classes.container, className].join(' ')}>
        {this.props.children}
      </PageButtonBase>
    );
  }
}
export default PageButtonNumber;
