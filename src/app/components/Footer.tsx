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
      fontWeight: '700' as 'bold',
      marginBottom: '8px',
      textAlign: 'left' as 'left',
      width: '450px',

      ...theme.footer.mainText,
    };
    const subText = {
      textAlign: 'left' as 'left',
      width: '450px',
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
          Все права защищены © Резинотехника - СК, 2011—2018
        </div>
        <div style={style.subText}>
          Информация, представленная на сайте, не является публичной офертой. <br />
          Полное или частичное использование материалов сайта <br />
          возможно только с письменного разрешения Фирмы &quot;Резинотехника&quot;.
        </div>
      </div>
    );
  }
}
export default Footer;
