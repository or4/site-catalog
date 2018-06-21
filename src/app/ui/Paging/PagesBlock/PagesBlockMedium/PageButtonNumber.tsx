import React from 'react';
import PageButtonBase, { BorderRadius } from '../common/PageButtonBase';

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
jss.setup(preset());

type Props = {
  className?: string;
  borderRadius: BorderRadius;
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
    const { borderRadius, className } = this.props;
    return (
      <PageButtonBase borderRadius={borderRadius} className={join(classes.container, className)} >
        {this.props.children}
      </PageButtonBase>
    );
  }
}
export default PageButtonNumber;
