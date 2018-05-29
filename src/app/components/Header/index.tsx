import React from 'react';

type Props = {
};
type State = {
};

class Header extends React.PureComponent<Props, State> {
  getStyle = () => {
    const container = {
      minHeight: '200px',
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
      <div style={style.container}>Header</div>
    );
  }
}

export default Header;
