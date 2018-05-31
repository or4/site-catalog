import React from 'react';
import Logo from 'components/Header/Logo';
import Banner from 'components/Header/Banner';
import Contacts from 'components/Header/Contacts';

const css = require('./index.scss');

type Props = {
};
type State = {
};

class Header extends React.PureComponent<Props, State> {
  // getStyle = () => {
  //   const container = {
  //     alignItems: 'center' as 'center',
  //     display: 'flex',
  //     justifyContent: 'space-between' as 'space-between',
  //     maxHeight: '140px',
  //     minHeight: '140px',
  //   };
  //   const logo = {
  //     marginLeft: '40px',
  //   };
  //   const banner = {
  //     marginLeft: 'auto',
  //     marginRight: '40px'
  //   };
  //   const contacts = {
  //     marginRight: '40px'
  //   };
  //   return {
  //     container,
  //     logo,
  //     banner,
  //     contacts,
  //   };
  // }
  componentDidMount() {
    console.log('Header componentDidMount');
  }
  render() {
    //const {  } = this.props;
    // const style = this.getStyle();
    // console.log('style', style);
    return (
      <div className={css.container}>
        <Logo className={css.logo} />
        <Banner className={css.banner} />
        <Contacts className={css.contacts} />
      </div>
    );
  }
}

export default Header;
