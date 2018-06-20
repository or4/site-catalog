import React from 'react';
import MiddleLayout from 'components/MiddleLayout';
import { log } from 'util/logger';

type Props = {
};
type State = {
};

class Production extends React.PureComponent<Props, State> {
  render() {
    log('Production render');
    //const {  } = this.props;
    return (
      <MiddleLayout route={'/production'}>
        <div>
          Production
        </div>
      </MiddleLayout>
    );
  }
}
export default Production;
