import React from 'react';
import { arrowIconBase64 } from 'ui/icons/base64';
import PageButtonBase from '../common/PageButtonBase';

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
jss.setup(preset());

type Props = {
  className?: string;
};
type State = {
};

const getClasses = () => {
  const container = {
    padding: '0 13px',
  };
  const image = {
    transform: 'rotate(90deg)',
    marginRight: '13px',
    marginBottom: '1px',
  };

  return {
    container,
    image,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

class PageButtonMediumPrev extends React.PureComponent<Props, State> {
  render() {
    const { className } = this.props;
    return (
      <PageButtonBase className={join(classes.container, className)} borderRadius="full">
        <img className={classes.image} src={arrowIconBase64} alt="" />
        <span>Назад</span>
      </PageButtonBase>
    );
  }
}
export default PageButtonMediumPrev;
