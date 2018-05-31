import React from 'react';
import Logo from 'components/Header/Logo';
import Banner from 'components/Header/Banner';
import Contacts from 'components/Header/Contacts';

type Props = {
};
type State = {
};

class Header extends React.PureComponent<Props, State> {
  getStyle = () => {
    const container = {
      alignItems: 'center' as 'center',
      display: 'flex',
      justifyContent: 'space-between' as 'space-between',
      maxHeight: '140px',
      minHeight: '140px',
    };
    const logo = {
      marginLeft: '40px',
    };
    const banner = {
      marginLeft: 'auto',
      marginRight: '40px'
    };
    const contacts = {
      marginRight: '40px'
    };
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
