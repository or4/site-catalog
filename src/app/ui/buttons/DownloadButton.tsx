import React from 'react';
import icon from 'assets/tmp/excel.svg';
import { flexRow } from 'ui/theme';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class DownloadButton extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      background: 'rgba(0,0,0,0.1)',
      borderRadius: '8px',
      border: '1px solid rgba(0,0,0,0.3)',
      height: '50px',
      width: '235px',

      ...flexRow('center'),
    };
    const img = {
      height: '32px',
      marginLeft: '13px',
    };
    const text = {
      marginLeft: '13px',
      fontSize: '16px',
    };
    return {
      container,
      img,
      text,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        <img style={style.img} src={icon} alt="xls" />
        <div style={style.text}>
          Скачать прайс
        </div>
      </div>
    );
  }
}
export default DownloadButton;
