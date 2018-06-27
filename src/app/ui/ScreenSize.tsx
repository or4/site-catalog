import React from 'react';
import { getScreenSize } from 'util/responsive';

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
      left: '10px',
      top: '10px',
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    return (
      <div style={style.container}>
        <div>{`${getWidth()}px, ${getHeight()}px, ${getScreenSize()}`}</div>
      </div>
    );
  }
}
export default ScreenSize;
