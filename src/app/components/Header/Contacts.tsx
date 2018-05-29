import React from 'react';
import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class Contacts extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      marginRight: '40px',
      width: '200px',
      ...theme.header.contacts,
    };
    const caption = {
      fontWeight: '700' as any,
      fontStyle: 'normal' as 'normal',
    };
    return {
      container,
      caption,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        <div style={style.caption}><b>КОНТАКТНАЯ ИНФОРМАЦИЯ</b></div>
        <div><b>Адрес:</b> 150000, г. Петропавловск,</div>
        <div>1 Проезд Я.Гашека 8</div>
        <div>&nbsp;</div>
        <div><b>Тел./факс:</b> 8-(7152) 52-24-25 8-(7152) 52-21-26 8-(7152) 52-01-62 8-(7152) 39-83-65</div>
      </div>
    );
  }
}
export default Contacts;
