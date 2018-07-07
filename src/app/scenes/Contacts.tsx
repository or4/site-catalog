import React from 'react';
import { MiddleLayout } from 'components/MiddleLayout';
import { logs, join } from 'utils';
import { theming } from 'ui';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  title: {
    fontWeight: '700' as 'bold',
    ...theming('articleTitle'),
  },
  marginBottom15: {
    marginBottom: '15px',
  },
  marginBottom5: {
    marginBottom: '5px',
  },
  textBlock: {

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
          <div className={join(classes.title, classes.marginBottom15)}>
            Контактная информация
          </div>

          <div className={join(classes.title, classes.marginBottom5)}>
            Адрес местонахождения
          </div>
          <div className={join(classes.textBlock, classes.marginBottom15)}>
            <div>150000 Республика Казахстан, </div>
            <div>Северо - Казахстанская область,</div>
            <div>г. Петропавловск, проезд Я. Гашека, 8 </div>
          </div>

          <div className={join(classes.title, classes.marginBottom5)}>
            Адрес для почты
          </div>
          <div className={join(classes.textBlock, classes.marginBottom15)}>
            <div>150000 Республика Казахстан, </div>
            <div>Северо - Казахстанская область, </div>
            <div>г. Петропавловск, ул. Ульянова 36 - 105 </div>
          </div>

          <div className={join(classes.title, classes.marginBottom5)}>
            Телефон/факс:
          </div>
          <div className={join(classes.textBlock, classes.marginBottom15)}>
            <div>+7 (7152) 52 - 24 - 25</div>
            <div>+7 (7152) 52 - 21 - 56</div>
            <div>+7 (7152) 52 - 01 - 62</div>
            <div>+7 (7152) 39 - 83 - 65</div>
          </div>

          <div className={classes.title}>
            e-mail: RTI-CK@mail.ru
          </div>
        </div>
      </MiddleLayout>
    );
  }
}
