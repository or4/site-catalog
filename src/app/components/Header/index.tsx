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
      minWidth: '1024px',
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
  componentDidMount() {
    console.log('Header componentDidMount');
  }
  render() {
    //const {  } = this.props;
    const style = this.getStyle();
    console.log('style', style);
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
