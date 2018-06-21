import React from 'react';
import PageButtonMediumNext from './PageButtonMediumNext';
import PageButtonNumber from './PageButtonNumber';
import PageButtonMediumPrev from './PageButtonMediumPrev';

type Props = {
};
type State = {
};

class PagesBlockMedium extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        <PageButtonMediumNext />
        <PageButtonNumber> 1 </PageButtonNumber>
        <PageButtonNumber> 2 </PageButtonNumber>
        <PageButtonNumber> 3 </PageButtonNumber>
        <PageButtonNumber> 4 </PageButtonNumber>
        <PageButtonNumber> 5 </PageButtonNumber>
        <PageButtonMediumPrev />
      </div>
    );
  }
}
export default PagesBlockMedium;
