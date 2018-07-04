import React from 'react';
import { Logo } from 'components/Header/Logo';
import { Banner } from 'components/Header/Banner';
import { Contacts } from 'components/Header/Contacts';
import { log, isSmall, isLarge, isMedium } from 'utils';
import { flexColumn, flexRow } from 'ui/theme';
import { subscribeResize, unsubscribeResize } from 'ui/Resize';

type Props = {
};
type State = {
};

export class Header extends React.PureComponent<Props, State> {
  componentDidMount() { subscribeResize(this, 'Header') }
  componentWillUnmount() { unsubscribeResize(this, 'Header') }

  getStyle = () => {
    const container = { };
    const logo = { };
    const banner = { };
    const contacts = { };

    if (isSmall()) {
      Object.assign(container, {
        ...flexColumn('center', 'space-between'),
      });
      Object.assign(logo, { marginTop: '30px', marginBottom: '30px' });
      Object.assign(contacts, { display: 'none' });
      Object.assign(banner, { display: 'none' });

    } else if (isMedium()) {
      Object.assign(container, {
        maxHeight: '140px',
        minHeight: '140px',
        ...flexRow('center', 'space-between'),
      });
      Object.assign(logo, { marginLeft: '40px' });
      Object.assign(banner, { display: 'none' });
      Object.assign(contacts, { marginLeft: 'auto', marginRight: '40px' });

    } else if (isLarge()) {
      Object.assign(container, {
        maxHeight: '140px',
        minHeight: '140px',
        ...flexRow('center', 'space-between'),
      });
      Object.assign(logo, { marginLeft: '40px' });
      Object.assign(banner, { marginLeft: 'auto', marginRight: '40px' });
      Object.assign(contacts, { marginRight: '40px' });
    }


    return {
      container,
      logo,
      banner,
      contacts,
    };
  }

  render() {
    log('Header render');
    const style = this.getStyle();

    return (
      <div style={style.container}>
        <Logo style={style.logo} />
        <Banner style={style.banner} />
        <Contacts style={style.contacts} />
      </div>
    );
  }
}

