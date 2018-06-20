import React from 'react';
import { theme, flexRow } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

type Props = {
  from?: number;
  total?: number;
  onNextClick?: () => void;
  onPrevClick?: () => void;
};
type State = {
};


class PagingMedium extends React.PureComponent<Props, State> {
  // test: any;
  componentDidMount() {
    // // const jss = createJss();
    // const sheet = jss.createStyleSheet(this.getClassNames()).attach();
    // const { classes } = sheet;
    // this.test = classes;
  }
  getClassNames = () => {
    return {
      test: {
        background: 'green'
      }
    };
  }
  getStyle() {
    const container = {
      display: 'flex',
    };
    const selectPageContainer = {
      display: 'flex',
      marginLeft: '0',
      marginRight: 'auto',
    };
    const selectAmountContainer = {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: '0',
    };

    const button = {
      background: 'transparent' as 'transparent',
      cursor: 'pointer',
      height: '28px',
      fontSize: '13px',

      ...theme.paging.text,
    };

    const pagePrevButton = {
      ...button,
      border: '1px solid rgba(0, 0, 0, 0.2)',
      borderRadius: '3px',
      marginRight: '13px',
      padding: '0 13px',
      textAlign: 'center' as 'center',
      transition: '.1s ease-out',
    };
    const pagePrevButtonImg = {
      transform: 'rotate(90deg)',
      marginRight: '13px',
      marginBottom: '1px',
    };
    const pageButton = {
      ...button,
      border: '1px solid rgba(0, 0, 0, 0.2)',
      textAlign: 'center' as 'center',
      width: '32px',
    };
    const pageNextButton = {
      ...button,
      border: '1px solid rgba(0, 0, 0, 0.2)',
      borderRadius: '3px',
      marginLeft: '13px',
      padding: '0 13px',
      textAlign: 'center' as 'center',
      transition: '.1s ease-out',
    };
    const pageNextButtonImg = {
      transform: 'rotate(270deg)',
      marginLeft: '13px',
      marginBottom: '1px',
    };
    const amountCaption = {
      ...button,
      padding: '0 10px 0 0',
    };
    const amountButton = {
      ...button,
      padding: '0 5px',
    };

    const amountButtonAll = {
      ...button,
      padding: '0 0 0 5px',
    };


    return {
      container,
      selectPageContainer,
      selectAmountContainer,
      pageButton,
      pagePrevButton,
      pagePrevButtonImg,
      pageNextButton,
      pageNextButtonImg,
      amountCaption,
      amountButton,
      amountButtonAll,
    };
  }
  onNextClick = () => {
    this.props.onNextClick && this.props.onNextClick();
  }
  onPrevClick = () => {
    this.props.onPrevClick && this.props.onPrevClick();
  }

  render() {
    // url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEyIDYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlNoYXBlIDI8L3RpdGxlPjxwYXRoIGQ9Ik0uOCAwTDYgNC42IDExLjIgMGwuOC43TDYgNiAwIC43LjggMHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)
    const style = this.getStyle();

    const sheet = jss.createStyleSheet(this.getClassNames()).attach();
    const { classes } = sheet;


    return (
      <div style={style.container} className={classes && classes.test || 'assd'}>
        <div style={style.selectPageContainer}>
          <div style={style.pagePrevButton}>
            <img style={style.pagePrevButtonImg} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEyIDYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlNoYXBlIDI8L3RpdGxlPjxwYXRoIGQ9Ik0uOCAwTDYgNC42IDExLjIgMGwuOC43TDYgNiAwIC43LjggMHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" />
            Назад
          </div>
          <div style={style.pageButton}>1</div>
          <div style={style.pageButton}>2</div>
          <div style={style.pageButton}>3</div>
          <div style={style.pageButton}>4</div>
          <div style={style.pageButton}>5</div>
          <div style={style.pageNextButton}>
            Вперед
            <img style={style.pageNextButtonImg} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEyIDYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlNoYXBlIDI8L3RpdGxlPjxwYXRoIGQ9Ik0uOCAwTDYgNC42IDExLjIgMGwuOC43TDYgNiAwIC43LjggMHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" />
          </div>
        </div>
        <div style={style.selectAmountContainer}>
          <div style={style.amountCaption}>Показывать по:</div>
          <div style={style.amountButton}>50</div>
          <div style={style.amountButton}>150</div>
          <div style={style.amountButton}>300</div>
          <div style={style.amountButtonAll}>Все</div>
        </div>
      </div>
    );
  }
}
export default PagingMedium;
