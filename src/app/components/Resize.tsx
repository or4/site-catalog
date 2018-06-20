import React from 'react';
import log from 'util/logger';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

const componentsToResize = [] as Array<any>;

export const subscribeResize = (component: any, key: string) => {
  componentsToResize.push(component);
  log('key subscribed resize', key);
};
export const unsubscribeResize = (component: any, key: string) => {
  const index = componentsToResize.indexOf(component);
  if (index >= 0) {
    delete componentsToResize[index];
    log('key unsubscribed resize', key);
  }
};

class Resize extends React.PureComponent<Props, State> {
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
    componentsToResize.forEach((item: any) => {
      try {
        item.forceUpdate && item.forceUpdate();
      } catch (e) {
        log('Resize forceUpdate', item, e);
      }
    });
  }

  render() {
    return (
      <div>
        &nbsp;
      </div>
    );
  }
}
export default Resize;
