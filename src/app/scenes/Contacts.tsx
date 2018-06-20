import React from 'react';
import MiddleLayout from 'components/MiddleLayout';
import log from 'util/logger';

type Props = {
};
type State = {
};

class Contacts extends React.PureComponent<Props, State> {
  render() {
    log('About render');
    //const {  } = this.props;
    return (
      <MiddleLayout route={'/contacts'}>
        <div>
          Contacts
        </div>
      </MiddleLayout>
    );
  }
}
export default Contacts;
