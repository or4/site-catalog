import React from 'react';
import jss from 'jss';
import { arrowIconBase64 } from 'ui/icons/base64';
import PageButtonBase from '../common/PageButtonBase';

type Props = {
};
type State = {
};

const getClasses = () => {
  const image = {
    transform: 'rotate(90deg)',
    marginRight: '13px',
    marginBottom: '1px',
  };

  return {
    image,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

class PageButtonMediumPrev extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageButtonBase>
        <img className={classes.image} src={arrowIconBase64} alt="" />
        <span>Назад</span>
      </PageButtonBase>
    );
  }
}
export default PageButtonMediumPrev;
