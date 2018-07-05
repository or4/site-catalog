import React from 'react';
import { MiddleLayout } from 'components/MiddleLayout';
import { logs } from 'utils';

type Props = {
};
type State = {
};

export class Contacts extends React.PureComponent<Props, State> {
  render() {
    logs('render', 'Contacts');
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
