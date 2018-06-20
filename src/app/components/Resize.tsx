import React from 'react';
import { log, logIntendation, IntendationType } from 'util/logger';

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
    logIntendation(IntendationType.start, 'window resize start');
    componentsToResize.forEach((item: any) => {
      try {
        item.forceUpdate && item.forceUpdate();
      } catch (e) {
        log('Resize forceUpdate', item, e);
      }
    });
    logIntendation(IntendationType.end, 'window resized done');
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
