import React from 'react';
import { scheme, flexRow } from 'ui/theme';
import { join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    background: scheme.background.amountOnPage,
    color: scheme.colors.amountOnPage,
    cursor: 'pointer',
    fontFamily: scheme.fontFamily.amountOnPage,
    fontSize: scheme.fontSize.amountOnPage,
    height: '28px',
    lineHeight: '28px',
    textDecoration: 'none' as 'none',
    transition: '.1s ease-out',


    ...flexRow('center', 'center'),

    '&:hover': {
      textDecoration: 'underline' as 'underline',
    }
  },
};

type Props = {
  className?: string;
  onClick: () => void;
};
type State = {
};

const sheet = jss.createStyleSheet(rawClasses).attach();
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
