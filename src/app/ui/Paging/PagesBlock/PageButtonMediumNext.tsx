import React from 'react';
import jss from 'jss';
import { arrowIconBase64 } from 'ui/icons/base64';
import PageButtonBase from 'ui/Paging/PagesBlock/PageButtonBase';

type Props = {
};
type State = {
};

const getClasses = () => {
  const image = {
    transform: 'rotate(270deg)',
    marginLeft: '13px',
    marginBottom: '1px',
  };

  return {
    image,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

class PageButtonMediumNext extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageButtonBase>
        <span>Вперед</span>
        <img className={classes.image} src={arrowIconBase64} alt="" />
      </PageButtonBase>
    );
  }
}
export default PageButtonMediumNext;
