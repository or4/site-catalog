import React from 'react';
import jss from 'jss';
import PageButtonText from 'ui/Paging/PagesBlock/PageButtonText';
import { arrowIconBase64 } from 'ui/icons/base64';

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

class PageButtonTextNext extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageButtonText>
        <span>Вперед</span>
        <img className={classes.image} src={arrowIconBase64} alt="" />
      </PageButtonText>
    );
  }
}
export default PageButtonTextNext;
