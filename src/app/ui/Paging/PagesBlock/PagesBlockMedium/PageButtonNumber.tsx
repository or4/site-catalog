import React from 'react';
import PageButtonBase, { BorderRadius } from '../common/PageButtonBase';

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
jss.setup(preset());

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

type Props = {
  className?: string;
  borderRadius: BorderRadius;
  onClick: () => void;
  hidden: boolean;
  isActive?: boolean;
};
type State = {
};

class PageButtonNumber extends React.PureComponent<Props, State> {
  render() {
    const { borderRadius, className, hidden, isActive, onClick, } = this.props;
    return (
      <PageButtonBase
        borderRadius={borderRadius}
        className={join(classes.container, className, hidden ? 'display-none' : '')}
        isActive={isActive}
        onClick={onClick}
      >
        {this.props.children}
      </PageButtonBase>
    );
  }
}
export default PageButtonNumber;
