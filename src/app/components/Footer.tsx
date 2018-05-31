import React from 'react';
import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class Footer extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      alignItems: 'center' as 'center',
      display: 'flex',
      justifyContent: 'center' as 'center',
      flexDirection: 'column' as 'column',
    };
    const mainText = {
      fontWeight: '700',
      marginBottom: '8px',

      ...theme.footer.mainText,
    };
    const subText = {
      width: '330px',
      ...theme.footer.subText,
    };
    return {
      container,
      mainText,
      subText,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        <div style={style.mainText}>
          © 2011 Резинотехника - СК
        </div>
        <div style={style.subText}>
          Полное или частичное использование материалов сайта возможно только с письменного разрешения Фирмы "Резинотехника".
        </div>
      </div>
    );
  }
}
export default Footer;
