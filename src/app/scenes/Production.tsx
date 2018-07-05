import React from 'react';
import { MiddleLayout } from 'components/MiddleLayout';
import { logs } from 'utils';

type Props = {
};
type State = {
};

export class Production extends React.PureComponent<Props, State> {
  render() {
    logs('render', 'Production');
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
