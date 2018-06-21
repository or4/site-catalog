import React from 'react';
import PagesBlockSmall from './PagesBlockSmall';
import PagesBlockMedium from './PagesBlockMedium';

type Props = {
  isSmall: boolean;
};
type State = {
};

class PagesBlock extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    const { isSmall } = this.props;
    return (
      <div style={style.container}>
        {isSmall ? <PagesBlockSmall /> : <PagesBlockMedium />}
      </div>
    );
  }
}
export default PagesBlock;
