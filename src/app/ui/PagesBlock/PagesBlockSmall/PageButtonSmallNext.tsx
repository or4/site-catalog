import React from 'react';
import { PageButtonBase } from '../common/PageButtonBase';
import { arrowIconBase64 } from 'ui/icons/base64';
import { join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    padding: '0 10px',
  },
  image: {
    transform: 'rotate(270deg)',
    marginBottom: '1px',
  },
};

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;

type Props = {
  className?: string;
  onClick: () => void;
};
type State = {
};

export class PageButtonSmallNext extends React.PureComponent<Props, State> {
  render() {
    const { className } = this.props;
    return (
      <PageButtonBase className={join(classes.container, className)} borderRadius={'right'} onClick={this.props.onClick}>
        <img className={classes.image} src={arrowIconBase64} alt="" />
      </PageButtonBase>
    );
  }
}
