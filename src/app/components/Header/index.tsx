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
    return {
      container,
    };
  }
  componentDidMount() {
    console.log('Header componentDidMount');
  }
  render() {
    //const {  } = this.props;
    const style = this.getStyle();
    return (
      <div style={style.container}>
        <Logo />
        <Banner />
        <Contacts />
      </div>
    );
  }
}

export default Header;
