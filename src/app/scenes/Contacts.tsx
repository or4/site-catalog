import React from 'react';
import { MiddleLayout } from 'components/MiddleLayout';
import { logs, join, joinObjects } from 'utils';
import { theming } from 'ui';

import jss from 'jss';
import preset from 'jss-preset-default';
import { wayImage } from 'assets/images';
jss.setup(preset());

const rawClasses = {
  title: {
    fontWeight: '700' as 'bold',
    ...theming('scene-contacts-title'),
  },
  marginBottom15: {
    marginBottom: '15px',
  },
  marginBottom50: {
    marginBottom: '50px',
  },
  marginBottom5: {
    marginBottom: '5px',
  },
  textBlock: {
    ...theming('scene-contacts-text'),
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();


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
          <div style={joinObjects({}, rawClasses.title, rawClasses.marginBottom15)}>
            Контактная информация
          </div>

          <div style={joinObjects({}, rawClasses.title, rawClasses.marginBottom5)}>
            Адрес местонахождения
          </div>
          <div style={joinObjects({}, rawClasses.textBlock, rawClasses.marginBottom15)}>
            <div>150000 Республика Казахстан, </div>
            <div>Северо - Казахстанская область,</div>
            <div>г. Петропавловск, проезд Я. Гашека, 8 </div>
          </div>

          <div style={joinObjects({}, rawClasses.title, rawClasses.marginBottom5)}>
            Адрес для почты
          </div>
          <div style={joinObjects({}, rawClasses.textBlock, rawClasses.marginBottom15)}>
            <div>150000 Республика Казахстан, </div>
            <div>Северо - Казахстанская область, </div>
            <div>г. Петропавловск, ул. Ульянова 36 - 105 </div>
          </div>

          <div style={joinObjects({}, rawClasses.title, rawClasses.marginBottom5)}>
            Телефон/факс:
          </div>
          <div style={joinObjects({}, rawClasses.textBlock, rawClasses.marginBottom15)}>
            <div>+7 (7152) 52 - 24 - 25</div>
            <div>+7 (7152) 52 - 21 - 56</div>
            <div>+7 (7152) 52 - 01 - 62</div>
            <div>+7 (7152) 39 - 83 - 65</div>
          </div>

          <div style={joinObjects({}, rawClasses.title, rawClasses.marginBottom50)}>
            e-mail: RTI-CK@mail.ru
          </div>
          <img src={wayImage} alt="" />
        </div>
      </MiddleLayout>
    );
  }
}
