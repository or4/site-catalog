import * as React from 'react';

type Props = {
  children: any;
};
type State = {
};

class MainLayout extends React.PureComponent<Props, State> {
  componentDidMount() {
    console.log('MainLayout componentDidMount');
  }
  getStyle = () => {
    const container = {
      background: '#ccc',
    };

    return {
      container,
    };
  }
  render() {
    const { children } = this.props;
    const style = this.getStyle();

    return (
      <div style={style.container}>
        {children}
      </div>
    );
  }
}
export default MainLayout;
