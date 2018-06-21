import React from 'react';
import PageButtonBase from '../common/PageButtonBase';
import { arrowIconBase64 } from 'ui/icons/base64';

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
  };
  const image = {
    transform: 'rotate(90deg)',
    marginBottom: '1px',
  };

  return {
    container,
    image,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

class PageButtonSmallPrev extends React.PureComponent<Props, State> {
  render() {
    const { className } = this.props;
    return (
      <PageButtonBase className={[classes.container, className].join(' ')} borderRadius={'left'}>
        <img className={classes.image} src={arrowIconBase64} alt="" />
      </PageButtonBase>
    );
  }
}
export default PageButtonSmallPrev;
