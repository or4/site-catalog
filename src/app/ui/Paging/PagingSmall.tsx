import React from 'react';
import { theme } from 'ui/theme';

type Props = {
  from?: number;
  total?: number;
  onNextClick?: () => void;
  onPrevClick?: () => void;
};
type State = {
};

class PagingSmall extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };

    const button = {
      background: 'transparent' as 'transparent',
      height: '20px',
      width: '25px'
    };

    const text = {
      ...theme.paging.text,
    };

    return {
      container,
      button,
      text,
    };
  }
  onNextClick = () => {
    this.props.onNextClick && this.props.onNextClick();
  }
  onPrevClick = () => {
    this.props.onPrevClick && this.props.onPrevClick();
  }

  render() {
    const { from, total } = this.props;
    const style = this.getStyle();
    return (
      <div style={style.container}>
        <div style={style.button}>
          &lt;
        </div>
        <div style={style.text}>
          {`${from} / ${total}`}
        </div>
        <div style={style.button}>
          &gt;
        </div>
      </div>
    );
  }
}
export default PagingSmall;
