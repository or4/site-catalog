import React from 'react';
import MiddleLayout from 'components/MiddleLayout';

type Props = {
};
type State = {
};

class Production extends React.PureComponent<Props, State> {
  render() {
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
