import React from 'react';
import { theme, flexRow } from 'ui/theme';

type Props = {
  from?: number;
  total?: number;
  onNextClick?: () => void;
  onPrevClick?: () => void;
};
type State = {
};

class PagingMedium extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      display: 'flex',
    };
    const selectPageContainer = {
      marginLeft: '0',
      marginRight: 'auto',
    };
    const selectAmountContainer = {
      marginLeft: 'auto',
      marginRight: '0',
    };

    const button = {
      background: 'transparent' as 'transparent',
      height: '20px',
      width: '25px',

      ...theme.paging.text,
    };

    const pageButton = {
      ...button,
    };
    const pageNextButton = {
      ...button,
    };
    const amountButton = {
      ...button,
    };

    const text = {
      ...theme.paging.text,
    };

    return {
      container,
      selectPageContainer,
      selectAmountContainer,
      pageButton,
      pageNextButton,
      amountButton,
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
    const style = this.getStyle();
    return (
      <div style={style.container}>
        <div style={style.selectPageContainer}>
          <div style={style.pageNextButton}>Назад</div>
          <div style={style.pageButton}>1</div>
          <div style={style.pageButton}>2</div>
          <div style={style.pageButton}>3</div>
          <div style={style.pageButton}>4</div>
          <div style={style.pageButton}>5</div>
          <div style={style.pageNextButton}>Вперед</div>
        </div>
        <div style={style.selectAmountContainer}>
          <div style={style.amountButton}>50</div>
          <div style={style.amountButton}>150</div>
          <div style={style.amountButton}>300</div>
          <div style={style.amountButton}>Все</div>
        </div>
      </div>
    );
  }
}
export default PagingMedium;
