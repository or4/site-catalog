import React from 'react';
import PageButtonMediumNext from './PageButtonMediumNext';
import PageButtonNumber from './PageButtonNumber';
import PageButtonMediumPrev from './PageButtonMediumPrev';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    display: 'flex',
  };
  const next = {
    marginRight: '13px',
  };
  const prev = {
    marginLeft: '13px',
  };
  return {
    container,
    next,
    prev,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
};
type State = {
};

class PagesBlockMedium extends React.PureComponent<Props, State> {
  getStyle() {
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div className={classes.container}>
        <PageButtonMediumNext className={classes.next} />
        <PageButtonNumber borderRadius={'left'}> 1 </PageButtonNumber>
        <PageButtonNumber borderRadius={'none'}> 2 </PageButtonNumber>
        <PageButtonNumber borderRadius={'none'}> 3 </PageButtonNumber>
        <PageButtonNumber borderRadius={'none'}> 4 </PageButtonNumber>
        <PageButtonNumber borderRadius={'right'}> 5 </PageButtonNumber>
        <PageButtonMediumPrev className={classes.prev} />
      </div>
    );
  }
}
export default PagesBlockMedium;
