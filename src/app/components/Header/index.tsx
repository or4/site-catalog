import React from 'react';
import Logo from 'components/Header/Logo';
import Banner from 'components/Header/Banner';
import Contacts from 'components/Header/Contacts';
import { isSmall, isLarge, isMedium } from 'util/responsive';

type Props = {
};
type State = {
};

class Header extends React.PureComponent<Props, State> {
  componentDidMount() {
    try {
      window.addEventListener('resize', this.resize);
    } catch (error) { }
  }

  componentWillUnmount() {
    try {
      window.removeEventListener('resize', this.resize);
    } catch (error) { }
  }
  resize = () => this.forceUpdate()

  getStyle = () => {
    const container = { };
    const logo = { };
    const banner = { };
    const contacts = { };

    if (isSmall()) {
      Object.assign(container, {
        alignItems: 'center' as 'center',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between' as 'space-between',
      });
      Object.assign(logo, { marginTop: '30px', marginBottom: '30px' });
      Object.assign(banner, { display: 'none' });
      Object.assign(contacts, { display: 'none' });
    } else if (isMedium()) {
      Object.assign(container, {
        alignItems: 'center' as 'center',
        display: 'flex',
        justifyContent: 'space-between' as 'space-between',
        maxHeight: '140px',
        minHeight: '140px',
      });
      Object.assign(logo, { marginLeft: '40px' });
      Object.assign(banner, { display: 'none' });
      Object.assign(contacts, { marginLeft: 'auto', marginRight: '40px' });
    } else if (isLarge()) {
      Object.assign(container, {
        alignItems: 'center' as 'center',
        display: 'flex',
        justifyContent: 'space-between' as 'space-between',
        maxHeight: '140px',
        minHeight: '140px',
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

export default Header;
