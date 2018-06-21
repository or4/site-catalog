import React from 'react';
import PageButtonSmallNext from './PageButtonSmallNext';
import PageButtonSmallPrev from './PageButtonSmallPrev';

type Props = {
};
type State = {
};

class PagesBlockSmall extends React.PureComponent<Props, State> {
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
        <PageButtonSmallNext />
        <PageButtonSmallPrev />
      </div>
    );
  }
}
export default PagesBlockSmall;
