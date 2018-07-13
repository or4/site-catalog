import React from 'react';
import { log, logIntendation, IntendationType } from 'utils';

type Props = {
};
type State = {
};

const componentsToResize = [] as Array<any>;
const logThis = false;

export const subscribeResize = (component: any, key: string) => {
  componentsToResize.push(component);
  logThis && log('key subscribed resize', key);
};
export const unsubscribeResize = (component: any, key: string) => {
  const index = componentsToResize.indexOf(component);
  if (index >= 0) {
    delete componentsToResize[index];
    logThis && log('key unsubscribed resize', key);
  }
};

export class Resize extends React.PureComponent<Props, State> {
  // componentDidMount() {
  //   try {
  //     window.addEventListener('resize', this.resize);
  //   } catch (error) { }
  // }

  // componentWillUnmount() {
  //   try {
  //     window.removeEventListener('resize', this.resize);
  //   } catch (error) { }
  // }
  // resize = () => {
  //   logThis && logIntendation(IntendationType.start, 'window resize start');
  //   componentsToResize.forEach((item: any) => {
  //     try {
  //       item.forceUpdate && item.forceUpdate();
  //     } catch (e) {
  //       logThis && log('Resize forceUpdate', item, e);
  //     }
  //   });
  //   logThis && logIntendation(IntendationType.end, 'window resized done');
  // }

  render() {
    return (
      <div>
        &nbsp;
      </div>
    );
  }
}
