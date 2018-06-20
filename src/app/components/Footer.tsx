import React from 'react';
import { theme, flexColumn } from 'ui/theme';
import { isSmall } from 'util/responsive';

type Props = {
};
type State = {
};

class Footer extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      padding: `0 ${theme.content.defaultMargin1} ${theme.content.defaultMargin1} ${theme.content.defaultMargin1}`,
      ...flexColumn('center', 'center'),
    };
    const mainText = {
      fontWeight: '700' as 'bold',
      marginBottom: '8px',
      textAlign: 'left' as 'left',

      ...theme.footer.mainText,
    };
    const subText = {
      textAlign: 'left' as 'left',
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

    return (
      <div style={style.container}>
        <div style={style.mainText}>
          Все права защищены © Резинотехника - СК, 2011—2018
        </div>
        <div style={style.subText}>
          Информация, представленная на сайте, не является публичной офертой.
          Полное или частичное использование материалов сайта возможно только с письменного разрешения Фирмы &quot;Резинотехника&quot;.
        </div>
      </div>
    );
  }
}
export default Footer;
