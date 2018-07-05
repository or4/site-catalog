import React from 'react';
import { arrowIconBase64 } from 'ui/icons/base64';
import { PageButtonBase } from '../common/PageButtonBase';
import { join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    padding: '0 13px',
  },
  image: {
    transform: 'rotate(90deg)',
    marginRight: '13px',
    marginBottom: '1px',
  },
};

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;

type Props = {
  className?: string;
  onClick: () => void;
  hidden: boolean;
};
type State = {
};

export class PageButtonMediumPrev extends React.PureComponent<Props, State> {
  render() {
    const { className, onClick, hidden } = this.props;
    return (
      <PageButtonBase borderRadius="full" className={join(classes.container, className, hidden ? 'display-none' : '')} onClick={onClick}>
        <img className={classes.image} src={arrowIconBase64} alt="" />
        <span>Назад</span>
      </PageButtonBase>
    );
  }
}
