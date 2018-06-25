import React from 'react';

type Props = {
};
type State = {
};

export const getWidth = () => {
  try { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth } catch (e) { return 0 }
};

export const getHeight = () => {
  try { return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight } catch (e) { return 0 }
};

class ScreenSize extends React.PureComponent<Props, State> {
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
  resize = () => {
    this.forceUpdate();
  }

  getStyle() {
    const container = {
      background: 'transparent',
      color: 'rgba(0, 0, 0, .8)',
      fontSize: '12px',
      fontFamily: 'Verdana, Tahoma, Arial, sans-serif',
      position: 'absolute' as 'absolute',
      right: '30px',
      // top: '20px',
      bottom: '20px',
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    return (
      <div style={style.container}>
        <div>{`screen width: ${getWidth()}px`}</div>
        <div>{`screen height: ${getHeight()}px`}</div>
      </div>
    );
  }
}
export default ScreenSize;
