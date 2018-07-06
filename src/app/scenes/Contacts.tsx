import React from 'react';
import { MiddleLayout } from 'components/MiddleLayout';
import { logs } from 'utils';

type Props = {
};
type State = {
};

export class Contacts extends React.PureComponent<Props, State> {
  render() {
    logs('render', 'Contacts');
    //const {  } = this.props;
    return (
      <MiddleLayout route={'/contacts'}>
        <div>
        Контактная информация
Адрес местонахождения
150000 Республика Казахстан,
Северо - Казахстанская область,
г. Петропавловск, проезд Я. Гашека, 8

Адрес для почты
150000 Республика Казахстан,
Северо - Казахстанская область,
г. Петропавловск, ул. Ульянова 36 - 105

Телефон/факс:
+7 (7152) 52 - 24 - 25
+7 (7152) 52 - 21 - 56
+7 (7152) 52 - 01 - 62
+7 (7152) 39 - 83 - 65

e-mail: RTI-CK@mail.ru
        </div>
      </MiddleLayout>
    );
  }
}
