import React from 'react';
import { PageButtonBase, BorderRadius } from '../common/PageButtonBase';
import { join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    width: '32px',
  },
};

const sheet = jss.createStyleSheet(rawClasses).attach();
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

export class PageButtonNumber extends React.PureComponent<Props, State> {
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
