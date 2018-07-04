import React from 'react';
import { MiddleLayout } from 'components/MiddleLayout';
import { log } from 'utils';

type Props = {
};
type State = {
};

export class Contacts extends React.PureComponent<Props, State> {
  render() {
    log('Contacts render');
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
