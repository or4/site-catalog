import React from 'react';
import { theme } from 'ui/theme';
import log from 'util/logger';

type Props = {
  className?: any;
  style?: any;
};
type State = {
};

class Contacts extends React.PureComponent<Props, State> {
  getStyle(customStyle: any) {
    const container = { };
    const caption = {};
    const address = {};
    const phones = {};

    Object.assign(container, {
      marginRight: '40px',
      width: '210px',
      ...theme.header.contacts,
    });
    Object.assign(caption, {
      fontWeight: '700' as any,
      fontStyle: 'normal' as 'normal',
      marginBottom: '6px',
    });
    Object.assign(address, { marginBottom: '5px', });

    if (customStyle) {
      Object.assign(container, customStyle);
    }

    return {
      container,
      caption,
      address,
      phones,
    };
  }
  render() {
    log('Header Contacts render');
    const { className, style: customStyle } = this.props;
    const style = this.getStyle(customStyle);
    const classes = className ? className : '';
    return (
      <div style={style.container} className={classes}>
        <div style={style.caption}><b>КОНТАКТНАЯ ИНФОРМАЦИЯ</b></div>
        <div style={style.address}>
          <b>Адрес:</b> 150000, г. Петропавловск,<br />
          1 Проезд Я.Гашека 8
        </div>
        <div style={style.phones}>
          <b>Тел./факс:</b> 8-(7152) 52-24-25 8-(7152) 52-21-26 8-(7152) 52-01-62 8-(7152) 39-83-65
        </div>
      </div>
    );
  }
}
export default Contacts;
