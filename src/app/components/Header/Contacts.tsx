import React from 'react';
import { theme } from 'ui/theme';
import { logs, join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    marginRight: '40px',
    width: '220px',

    ...theme.header.contacts,
  },
  caption: {
    fontWeight: '700' as any,
    fontStyle: 'normal' as 'normal',
    marginBottom: '6px',
  },
  address: {
    marginBottom: '5px'
  },
  phones: {
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  className?: any;
  style?: any;
};
type State = {
};

export class Contacts extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: '',
    style: {},
  }
  render() {
    logs('render', 'Header Contacts');
    const { className: customClassName, style: customStyle } = this.props;

    return (
      <div style={customStyle} className={join(classes.container, customClassName)}>
        <div className={classes.caption}><b>КОНТАКТНАЯ ИНФОРМАЦИЯ</b></div>
        <div className={classes.address}>
          <b>Адрес:</b> 150000, г. Петропавловск,<br />
          1 Проезд Я.Гашека 8
        </div>
        <div className={classes.phones}>
          <b>Тел./факс:</b> 8-(7152) 52-24-25 8-(7152) 52-21-26 8-(7152) 52-01-62 8-(7152) 39-83-65
        </div>
      </div>
    );
  }
}
